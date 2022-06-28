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
        <div class="offcanvas-header">
          <div class="offcanvas-title" id="offcanvasTopLabel">
      <Link to={"/home"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/project"}>Project</Link>
      <Link to={"/contact"}>Contact</Link>
          </div>
          <button 
          
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ><img
          src=""
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasTop"
          aria-controls="offcanvasTop"
        /></button>
        </div>
        {/* <div class="offcanvas-body">...</div> */}
      </div>
    </div>
  );
}

export default Menu;
