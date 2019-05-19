const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/ba500acc8480ffc8a13554c6e0a8b9d3/" +
    latitude +
    "," +
    longitude +
    "?units=si";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather services", undefined);
    } else if (body.error) {
      callback("Unable to find location. Try another search", undefined);
    } else {
      callback(
        undefined,
        body.daily.data[0].summary +
          " Temperature is around " +
          body.daily.data[0].temperatureHigh +
          "."
      );
    }
  });
};

module.exports = forecast;
