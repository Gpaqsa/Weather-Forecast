import React, { useState } from "react";
import axios from "axios";
function App() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=dalas&appid=6a03361273178414adeb1036973a5d2e`;

  return (
    <div className="app">
      <div className="container">
        <section className="top">
          <article className="location">
            <p>Dalas</p>
          </article>
          <article className="temp">
            <h1>65°C</h1>
          </article>
          <article className="description">
            <p>Clouds</p>
          </article>
        </section>
        <section className="Buttom">
          <article className="feels">
            <p>65°C</p>
          </article>
          <article className="humidity">
            <p>20%</p>
          </article>
          <article className="wind">12 MPH</article>
        </section>
      </div>
    </div>
  );
}

export default App;
