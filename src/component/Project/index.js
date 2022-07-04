import React from "react";
import "./style.css";

function Project() {
  return (
    <>
      <div className="dina hederContact"> Projects</div>

      <div className="newDiv">
        <div class="container">
          <div class="card">
            <div class="face face1">
              <div class="content1">
                <div class="icon">
                  <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div class="face face2">
              <div class="content1">
                <h3>
                  <a
                    href="https://62ad1d7ae39add1060982f66--keen-stroopwafel-441c58.netlify.app/"
                    target="_blank"
                  >
                    Infinity Zone
                  </a>
                </h3>
                <span>
                  - eCommerce website for electronics products, Where users can
                  shop online with a real database - Provides all products
                  according to user interest in categories and brands{" "}
                </span>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="face face1">
              <div class="content1">
                <div class="icon">
                  <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div class="face face2">
              <div class="content1">
                <h3>Give Blood</h3>
                <span>
                  - Donating blood units, Where users can donate or make an
                  emergency request - It provides a reliable platform to connect
                  local blood donors with patients.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
