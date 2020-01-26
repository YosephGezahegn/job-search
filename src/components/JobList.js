import React, { useState, useEffect } from "react";
import "../App.css";

function JobList() {
  return (
    <div className="container">
      <h2>This is the Feed Component!</h2>
      <div className="row">
        <div className="col-md-8">
          <h3>Current Jobs</h3>
          <ol>
            <li>
              <div style={style.jobPost}>
                <h4>Graphic Designer</h4>
                <p>Need someone to create a logo!</p>
              </div>
            </li>
          </ol>
        </div>

        <div className="col-md-4"></div>
      </div>
    </div>
  );
}
const style = {
  jobPost: {
    padding: 16,
    background: "#f9f9f9",
    border: "1px solid #ddd",
    marginBottom: 24,
    marginRight: 40
  }
};

export default JobList;
