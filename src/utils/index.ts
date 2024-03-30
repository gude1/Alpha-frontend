export function objectToQueryString(obj: { [key: string]: any }): string {
  const params = new URLSearchParams();
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      params.append(key, obj[key]);
    }
  }
  return params.toString();
}

export function formatTimeSeriesData(data: TimeSeries): string[][] {
  const formattedData: string[][] = [];

  for (const timestamp in data) {
    console.log(timestamp, data);
    if (data.hasOwnProperty(timestamp)) {
      const entry = data[timestamp];
      const formattedEntry: string[] = [];

      formattedEntry.push(timestamp);
      formattedEntry.push(entry["1. open"]);
      formattedEntry.push(entry["2. high"]);
      formattedEntry.push(entry["3. low"]);
      formattedEntry.push(entry["4. close"]);
      formattedEntry.push(entry["5. volume"]);

      formattedData.push(formattedEntry);
    }
  }

  return formattedData;
}

export function getFirstObjectKeys(data: TimeSeries): string[] | null {
  const timestamps = Object.keys(data);
  if (timestamps.length === 0) {
    return null;
  }

  const firstTimestamp = timestamps[0];
  const firstObject = data[firstTimestamp];
  const keys = Object.keys(firstObject);
  return keys;
}
