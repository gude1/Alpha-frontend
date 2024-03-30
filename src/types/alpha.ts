type TimeInterval = "1min" | "5min" | "15min" | "30min" | "60min";

type OutputSize = "compact" | "full";

type DataType = "json" | "csv";

interface TimeSeriesApiRequestParam {
  function: string; // e.g., "TIME_SERIES_INTRADAY"
  symbol: string; // e.g., "IBM"
  interval: TimeInterval;
  adjusted?: boolean; // default is true
  extended_hours?: boolean; // default is true
  month?: string; // format: YYYY-MM
  outputsize?: OutputSize; // default is "compact"
  datatype?: DataType; // default is "json"
  apikey: string;
}

interface StockDataPoint {
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
}

interface MetaData {
  "1. Information": string;
  "2. Symbol": string;
  "3. Last Refreshed": string;
  "4. Interval": string;
  "5. Output Size": string;
  "6. Time Zone": string;
}

interface TimeSeriesData {
  "1. open": string;
  "2. high": string;
  "3. low": string;
  "4. close": string;
  "5. volume": string;
}

interface TimeSeries {
  [timestamp: string]: TimeSeriesData;
}

interface TimeSeriesResponse {
  "Meta Data": MetaData;
  "Time Series (5min)": TimeSeries;
  Information?: string;
}
