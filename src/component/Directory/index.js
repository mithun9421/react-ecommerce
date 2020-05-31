import React from "react";
import ShopMenImage from "../../assets/shopMens.jpg";
import ShopWomenImage from "../../assets/shopWomens.jpg";
import "./styles.scss";
const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{ backgroundImage: `url(${ShopWomenImage})` }}
        >
          <a>Shop Womens</a>
        </div>
        <div
          className="item"
          style={{ backgroundImage: `url(${ShopMenImage})` }}
        >
          <a>Shop Mens</a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
