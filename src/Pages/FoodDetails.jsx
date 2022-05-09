import React from "react";
import "./foodDetails.scss";
import TopBar from "../Components/TopBar/TopBar";

function FoodDetails() {
  return (
    <div>
      <TopBar style={{ color: "red" }} />
      <div className="container">
        <div className="row detail">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <img src="img/corba.jpg" alt="" />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <h2>Sebzeli Çorba</h2>
            <ul>
              Malzemeler
              <li>aa</li>
              <li>aa</li>
              <li>aa</li>
            </ul>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              nihil veniam et iure excepturi id earum libero sequi temporibus
              dignissimos dicta ab omnis autem dolor, possimus reiciendis beatae
              perspiciatis accusantium quis, impedit expedita. Officia eligendi
              culpa corporis fugit, cumque eos soluta saepe vero facilis nostrum
              minima reiciendis repudiandae error odio!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodDetails;
