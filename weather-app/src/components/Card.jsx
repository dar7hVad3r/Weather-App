import { useState } from "react";

const Card = ({ city, weather, setWeather }) => {
    const clearW = () => {
        setWeather({})
    }
  return (
    <div class="card text-center">
      <div class="card-header" style={{ fontSize: "2em" }}>
        {city}
      </div>
      <div class="card-body">
        <h4 class="card-title">Weather today in you area</h4>
        {weather.main === undefined ? (
          <div></div>
        ) : (
          <table className="table table-striped table-bordered ">
            <tbody>
              <tr>
                <th className="col-md-6">Temperature</th>
                <td>{(weather.main.temp - 273.15).toFixed(2)} °C</td>
              </tr>
              <tr>
                <th className="col-md-6">Feels Like</th>
                <td>{(weather.main.feels_like - 273.15).toFixed(2)} °C</td>
              </tr>
              <tr>
                <th className="col-md-6">Minimum Temperature</th>
                <td>{(weather.main.temp_min - 273.15).toFixed(2)} °C</td>
              </tr>
              <tr>
                <th className="col-md-6">Maximum Temperature</th>
                <td>{(weather.main.temp_max - 273.15).toFixed(2)} °C</td>
              </tr>
              <tr>
                <th className="col-md-6">Humidity</th>
                <td>{(weather.main.humidity).toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
      <div class="card-footer text-muted">
          <button className="btn btn-info" onClick={clearW} >clear</button>
      </div>
    </div>
  );
};
export default Card