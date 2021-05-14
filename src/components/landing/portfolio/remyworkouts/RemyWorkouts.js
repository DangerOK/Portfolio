import React from "react";

import PortfolioButton from "../portfolioButton/PortfolioButton";
import RemyWorkoutsThumb from "../../../../assets/images/resources/RemyWorkoutsThumb.png";

const RemyWorkouts = () => (
  <div className="project">
    <h2>Remy Workouts</h2>
    <img src={RemyWorkoutsThumb} alt="site thumbnail" />
    <div className="portfolio-button-wrapper">
      <PortfolioButton name="Visit Site" link="https://RemyWorkouts.com" />
      <PortfolioButton name="Shopify" link="https://shopify.com" />
    </div>
    <p>
      Remy Workouts is a Personal Trainer known for training numerous NBA
      players. I created his personal website using Shopify and Bootstrap.{" "}
    </p>
  </div>
);

export default RemyWorkouts;
