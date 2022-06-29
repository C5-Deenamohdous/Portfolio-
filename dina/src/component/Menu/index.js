import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Menu() {
  return (
    <div className="container">
      <img
        src="https://img.icons8.com/external-android-line-2px-amoghdesign/24/000000/external-list-multimedia-line-24px-android-line-2px-amoghdesign-3.png"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasTop"
        aria-controls="offcanvasTop"
      />

      <div
        class="offcanvas offcanvas-top "
        tabindex="-1"
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
      >
        <div className="closeButton">
          <button
            type="button"

            // class="btn-close"
            // data-bs-dismiss="offcanvas"
            // aria-label="Close"
          >
            <img
              src="https://img.icons8.com/glyph-neue/64/000000/cancel.png"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasTop"
              aria-controls="offcanvasTop"
            />
          </button>
        </div>
        <div class="offcanvas-header">
          <div class="offcanvas-title" id="offcanvasTopLabel">
            <div className="socialInfo">
              <a href="https://www.linkedin.com/in/dina-al-dous">
                <img src="https://img.icons8.com/ios-glyphs/30/000000/linkedin.png" />
              </a>
              <a href="mailto:dina.mohdous@gmail.com">
                <img src="https://img.icons8.com/material-sharp/24/000000/gmail-new.png" />
              </a>
              <a href="https://github.com/Deenamohdous">
                <img src="https://img.icons8.com/ios-glyphs/30/000000/github.png" />
              </a>
              <a href="https://www.instagram.com/">
                <img src="https://img.icons8.com/ios-glyphs/30/000000/instagram-new.png" />
              </a>
            </div>
            <Link to={"/about"}>About</Link>
            <Link to={"/home"}>Skills</Link>
    
            <Link to={"/project"}>Project</Link>
            <Link to={"/contact"}>Contact</Link>
          </div>{" "}
        </div>
      </div>
      {/* <div class="offcanvas-body">...</div> */}
    </div>
  );
}

export default Menu;
