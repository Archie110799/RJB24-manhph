import React from "react";
import { Link } from "react-router-dom";

export default function Navi() {
  return (
    <div className="card text-center">
      <div className="card-header">
        <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item">
            <Link className="nav-link" aria-current="true" to="/">
              LIST
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" aria-current="true" to="/form">
              FORM
            </Link>
          </li>
        </ul>
      </div>
      {/* <div className="card-body">
        <h5 className="card-title">
          LẬP TRÌNH WEB VỚI REACT, NODEJS, MONGODB, EXPRESSJS
        </h5>
        <p className="card-text">
          ReactJS Batch 24
        </p>
      </div> */}
    </div>
  );
}
