import { useEffect, useState } from "react";
import Table from "../../components/Table/Table";
import { getTimeSeriesData } from "../../api/alpha";
import Spinner from "../../components/Spinner/Spinner";
import Button from "../../components/Button/Button";
import { formatTimeSeriesData } from "../../utils";

function Home() {
  const [res, setRes] = useState<TimeSeriesResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const getTimeSeries = async () => {
    try {
      setLoading(true);
      const res = await getTimeSeriesData({
        apikey: process.env.API_KEY || "",
        function: "TIME_SERIES_INTRADAY",
        interval: "5min",
        datatype: "json",
        outputsize: "compact",
        symbol: "IBM",
      });
      setLoading(false);

      if (!res.success) {
        return;
      }

      let res_data = res.data as TimeSeriesResponse;
      setRes(res_data);
    } catch (err) {
      setLoading(false);
      console.error("getTimeSeries err", err);
    }
  };

  const renderContent = () => {
    if (loading) {
      return <Spinner size={60} />;
    }

    if ((!loading && !res) || !res?.["Time Series (5min)"]) {
      return (
        <div className="flex flex-col items-center mt-10">
          <p className="text-base text-gray-400">
            {res?.Information || "No Result"}
          </p>
          <Button text="Fetch" onClick={getTimeSeries} />
        </div>
      );
    }

    if (res && res["Time Series (5min)"]) {
      let timeseries = res["Time Series (5min)"];
      let head = [
        "Time",
        "1. open",
        "2. high",
        "3. low",
        "4. close",
        "5. volume",
      ];

      let data_body = formatTimeSeriesData(timeseries);

      return (
        <div className="w-full">
          <p className="text-xl font-bold text-blue-700">
            1. Information : {res["Meta Data"]["1. Information"]}
          </p>
          <p className="text-xl font-bold text-blue-700">
            2. Symbol : {res["Meta Data"]["2. Symbol"]}
          </p>
          <p className="text-xl font-bold text-blue-700">
            3. Last Refreshed : {res["Meta Data"]["3. Last Refreshed"]}
          </p>
          <p className="text-xl font-bold text-blue-700">
            4. Interval: {res["Meta Data"]["4. Interval"]}
          </p>
          <p className="text-xl font-bold text-blue-700">
            5. Output Size : {res["Meta Data"]["5. Output Size"]}
          </p>
          <p className="text-xl font-bold text-blue-700">
            6. Time Zone : {res["Meta Data"]["6. Time Zone"]}
          </p>
          <Table headers={head} body={data_body} />
        </div>
      );
    }
  };

  useEffect(() => {
    getTimeSeries();
  }, []);

  return <div className="flex flex-col items-center">{renderContent()}</div>;
}

export default Home;
