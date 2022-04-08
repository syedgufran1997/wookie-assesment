import React, { useState, useEffect } from "react";
import axios from "axios";

function MovieDetails() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

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

  console.log("data =>>", data);

  return (
    <div>
      <div className="header">
        <div>
          <h2>WOOKIE</h2>
          <h2>MOVIES</h2>
        </div>

        <div>Search Bar</div>
      </div>
      {/* 
      {data &&
        data?.map((item, index) => ( */}
      <div className="detailsMainWrap">
        <div className="detailImagWrap">
          <img src={data[0]?.backdrop} alt="movieposter" />
        </div>

        <div className="detailContentWrap">
          <div>
            <p>{data[0]?.title}</p>
          </div>

          <div>
            <p>
              {data[0]?.released_on} || {data[0]?.length} || {data[0]?.director}
            </p>

            {data[0]?.cast?.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>

          <div>
            <p>{data[0]?.overview}</p>
          </div>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
}

export default MovieDetails;
