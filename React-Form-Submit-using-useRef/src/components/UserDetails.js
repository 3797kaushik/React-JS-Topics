import React from "react";
import { useRef } from "react";
import "./UserDetails.css";

const UserDetails = () => {
  const inputStyle = {
    "marginLeft": "70px",
  };

  const emailStyle = { 
    width: "90%" 
  };

  const submitForm = (e) => {
    e.preventDefault();
    const res = {
      FirstName: fname.current.value,
      lastName: sname.current.value,
      email: email.current.value,
      country: country.current.value,
      state: state.current.value,
      profession: profession.current.value,
      zip: zip.current.value,
    };
    console.log(res);
  };
  const fname = useRef();
  const sname = useRef();
  const email = useRef();
  const country = useRef();
  const state = useRef();
  const profession = useRef();
  const zip = useRef();
  return (
    <form onSubmit={submitForm}>
      <div className="userDetails">
        <input placeholder="FirstName*" ref={fname}></input>
        <input placeholder="LastName*" ref={sname} style={inputStyle}></input>
        <div>
          <input placeholder="Email*" style={emailStyle} ref={email}></input>
        </div>
        <select className="selectCount" ref={country}>
          <option>Country*</option>
          <option>India</option>
        </select>
        <select className="selectCount" ref={state} style={inputStyle}>
          <option>State*</option>
          <option>Telangana</option>
        </select>
        <div>
          <select className="selectCount" ref={profession}>
            <option>Professional Category*</option>
            <option>Telangana</option>
          </select>
          <input placeholder="Zip/Postal Code" ref={zip} style={inputStyle}></input>
        </div>
        <button className="button">Request Demo</button>
        <button className="buttonWhite">Request info</button>
        <button className="buttonWhite">Contact iTero Support</button>
        <div>
          <textarea placeholder=" Is there anything else we should know? in a few words,let us know how else we can support you: le:growing my practice,special financing needs,etc."></textarea>
        </div>
        <div>
          <button className="buttonBlue" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};
export default UserDetails;
