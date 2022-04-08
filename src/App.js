import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Link } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);

  const fetchMovies = () => {
    const options = {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ToppersnotesReactTest`,
      },
    };

    axios
      .get("https://api.toppersnotes.com/api/get/mock/movies", options)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const ActionMovies = data?.filter((item) => item.genres.includes("Action"));

  const DrameMovies = data?.filter((item) => item.genres.includes("Drama"));

  const CrimeMovies = data?.filter((item) => item.genres.includes("Crime"));

  return (
    <div>
      <div className="header">
        <div>
          <h2>WOOKIE</h2>
          <h2>MOVIES</h2>
        </div>

        <div>Search Bar</div>
      </div>

      <div className="mainWrap">
        <h4>Action</h4>

        <div className="movieWrap">
          {ActionMovies.length &&
            ActionMovies?.map((item, index) => (
              <Link to="/movie-details">
                <div key={index} className="movieCardWrap">
                  <div className="imageWrap">
                    <img src={item.poster} alt="movieImage" />
                  </div>
                  <div className="titleWrap">
                    <p>{item.title}</p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>

      <div className="mainWrap">
        <h4>Drama</h4>

        <div className="movieWrap">
          {DrameMovies.length &&
            DrameMovies?.map((item, index) => (
              <Link to="/movie-details">
                <div key={index} className="movieCardWrap">
                  <div className="imageWrap">
                    <img src={item.poster} alt="movieImage" />
                  </div>
                  <div className="titleWrap">
                    <p>{item.title}</p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>

      <div className="mainWrap">
        <h4>Crime</h4>

        <div className="movieWrap">
          {CrimeMovies.length &&
            CrimeMovies?.map((item, index) => (
              <Link to="/movie-details">
                <div key={index} className="movieCardWrap">
                  <div className="imageWrap">
                    <img src={item.poster} alt="movieImage" />
                  </div>
                  <div className="titleWrap">
                    <p>{item.title}</p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
