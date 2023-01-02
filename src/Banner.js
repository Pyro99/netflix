import React from "react";
import "./banner.css";

const Banner = () => {
  const truncate = (string, end) => {
    return string.length > end ? string.substring(0, end - 1) + "..." : string;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://assets.vogue.in/photos/627cb0eaecb3436d3f16f9fe/16:9/w_1280,c_limit/netflix-series-2019-roster-1.png")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">MOVIE NAME</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(
            `Test description`,
            150
          )}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
