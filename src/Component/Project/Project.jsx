import React from "react";
import Fade from "react-reveal/Fade";
import "./Project.css";

const Project = (props) => {
  return (
    <div className="fluid-container">
      <div className="row">
        <div className="col-lg-6 project-t "></div>

        <div className="col-lg-6 img order-first order-lg-last">
          <img className="comimg" src={props.img} />
          <p className="p">{props.title}</p>
          <p className="p">Color : {props.color}</p>
          <p className="p">
            <b>{props.desc}</b>
          </p>
          <p className="p">{props.MRP}</p>
          <p className="pprice">{props.price}</p>
          <hr />
          <p className="pemi">{props.emi}</p>
          <p className="p">{props.emidetail}</p>
          <hr />
          <button className="firstbtn">
            <span>
              {" "}
              <a id="a" target="_blank">
                Pre-Book Now{" "}
              </a>
            </span>
          </button>
          <button className="secondbtn">
            <span>
              {" "}
              <a id="b" target="_blank">
                Learn More{" "}
              </a>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
