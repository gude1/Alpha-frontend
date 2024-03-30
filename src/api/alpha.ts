import axios from "axios";
import { objectToQueryString } from "../utils";

export const getTimeSeriesData = async (param: TimeSeriesApiRequestParam) => {
  try {
    const query_params = objectToQueryString(param);
    const result = await axios.get(
      `${process.env.API_URL}/query?${query_params}`
    );

    let data = result.data as TimeSeriesResponse;

    return {
      success: true,
      data,
    };
  } catch (err) {
    console.log("getTimeSeriesData err", err);
    return {
      success: false,
      data: [],
    };
  }
};
