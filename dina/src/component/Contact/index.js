import React, { useRef } from "react";
import emailjs from "emailjs-com"
import "./style.css"
function Contact() {


  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_dk0vbz7",
        "template_m40xrtx",
        form.current,
        "d0uvdfTG1FIlKyfJS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {

          console.log(error.text);
        }
      );
  };

  return (
    <>
     <div className="hederContact"> Contact Us</div>
    <div className="contactContainer">
     
      <div className="form">
      <form  ref={form} onSubmit={sendEmail}>
        <div className="allInputs">
      <div className="nameAndMailContainer">
      <div className="nameInput">
    <label className="visually-hidden" for="autoSizingInput">Name</label>
    <input type="text" className="form-control" id="autoSizingInput" placeholder="Name"/>
  </div>
      <div className="mailInput">
    <label className="visually-hidden" for="autoSizingInputGroup">Email</label>
    <div className="input-group">
      <div className="input-group-text">@</div>
      <input type="text" className="form-control" id="autoSizingInputGroup" placeholder="Email"/>
    </div>
  </div>
  </div>
  <div className="col-auto">
    <label className="visually-hidden" for="autoSizingInput">Name</label>
    <input type="text" className="form-control" id="autoSizingInput" placeholder="Subject"/>
  </div>
  <div className="textArea">
  <div className="col-auto">
    <label className="visually-hidden" for="autoSizingInput">Name</label>
    <textarea type="text" className="form-control" id="autoSizingInput" placeholder="Message"/>
  </div></div>
  </div>
      <div className="col-12">
    <button type="submit" className="btn btn-primary"><span>Send Message!</span></button>
  </div>
      </form>
    </div>
    <div className="mapRight">
    <div class="mapouter"><div class="gmap_canvas"><iframe width="450" height="255" id="gmap_canvas" src="https://maps.google.com/maps?q=amman&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.whatismyip-address.com"></a> 
    <style>.mapouter position:relative;text-align:right;height:358px;width:424px;</style>
    <a href="https://www.embedgooglemap.net"></a><style>.gmap_canvas overflow:hidden;background:none!important;height:358px;width:424px;</style></div></div>

    </div>
    </div>
  </>);
}

export default Contact;
