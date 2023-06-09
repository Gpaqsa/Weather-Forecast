import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [cookies, setCookies] = useCookies(["location"]);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=6a03361273178414adeb1036973a5d2e`;

  const handle = () => {
    // setCookies("location", location, { path: "/" });
    if (cookies) {
      setCookies("location", location, { path: "/" });
    }
  };

  // coneection to API
  const searchLocation = (event) => {
    if (event.key === "Enter") {
      handle();
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation(" ");
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>

      <div className="container">
        <section className="top">
          <article className="location">
            <p>{data.name}</p>
          </article>
          <article className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()} °C</h1> : null}
            {/* <h1>65°C</h1> */}
          </article>
          <article className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
            {/* <p>Clouds</p> */}
          </article>
        </section>

        {data.name !== undefined && (
          <section className="Bottom">
            <article className="feels">
              {data.main ? (
                <p className="bold">{data.main.feels_like.toFixed()} °C</p>
              ) : null}
              <p>Feels Like</p>
            </article>
            <article className="humidity">
              {data.main ? (
                <p className="bold"> {data.main.humidity} %</p>
              ) : null}
              {/* <p className="bold">20%</p> */}
              <p>Humidity</p>
            </article>
            <article className="wind">
              {data.wind ? (
                <p className="bold">{data.wind.speed.toFixed()} MPH</p>
              ) : null}
              {/* <p className="bold">12 MPH</p> */}
              <p>Wind Speed</p>
            </article>
          </section>
        )}
      </div>
    </div>
  );
}

export default App;
