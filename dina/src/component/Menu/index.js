import React ,{useEffect} from "react";
import { Link } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";

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
        className="offcanvas offcanvas-top "
        tabindex="-1"
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
      >
        {/* <div  className="closeButton"> */}
        
        {/* </div> */}
        <div className="offcanvas-header">
          <div className="offcanvas-title" id="offcanvasTopLabel">
            <div className="socialInfo">
            <span className="closeButton"
            type="button"

            // class="btn-close"
            // data-bs-dismiss="offcanvas"
            // aria-label="Close"
            data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasTop"
              aria-controls="offcanvasTop"
          >
          <AiFillCloseCircle/>
          </span>
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
            <div className="navBar">
            <span data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasTop"
              aria-controls="offcanvasTop"> <Link to={"/"}>Home</Link></span>
            <span data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasTop"
              aria-controls="offcanvasTop"><Link  to={"/about"}  
              >About</Link></span>
         
<span data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasTop"
              aria-controls="offcanvasTop"> <Link to={"/home"}>Skills</Link></span>
           <span data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasTop"
              aria-controls="offcanvasTop"><Link to={"/project"}>Project</Link></span>
    
        <span data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasTop"
              aria-controls="offcanvasTop">  <Link to={"/contact"}>Contact</Link></span>
          
          </div>{" "}
          </div>
          <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
        </div>
      </div>
    <div className="rightAnimation">

    </div>
    </div>
  );
}

export default Menu;
