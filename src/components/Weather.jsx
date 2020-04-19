import React, { Component, useState } from "react";

const api = {
  key: "200cb3dc559b9814baea63553c34ba49",
  base: "https://api.openweathermap.org/data/2.5/",
};

const [query, setQuery] = useState("");
const [weather, setWeather] = useState({});

const search = (evt) => {
  if (evt.key === "Enter") {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        setQuery("");
        console.log(result);
      });
  }
};

const dateBuilder = (d) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${month} ${date} ${year}`;
};

class Weather extends Component {
  state = {};

  render() {
    return (
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        <div>
          <div className="location-box">
            <div className="location">NYC, US</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
        </div>
        <div className="weather-box">
          <div className="temp">15</div>
          <div className="weather">rain</div>
        </div>
      </main>
    );
  }
}

export default Weather;
