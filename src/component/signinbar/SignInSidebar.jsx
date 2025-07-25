import React, { useState } from "react";
import "./SignInSidebar.css";
import { IoCloseOutline } from "react-icons/io5";

const SignInSidebar = ({ isOpen, setIsOpen }) => {
  const [isRegistered, setIsregistered] = useState(false);
  const [error, setError] = useState({});
  const [formdata, setFormdata] = useState({
    mobile: "",
    name: "",
    email: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (formdata.mobile.trim() === "") {
      newErrors.mobile = "Mobile is required";
    } else if (!/^\d{10}$/.test(formdata.mobile)) {
      newErrors.mobile = "Mobile must be 10 digits";
    }
    if (formdata.name.trim() == "") {
      newErrors.name = "Name is required";
    }
    if (formdata.email.trim() == "") {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formdata.email)) {
      newErrors.email = "Invalid email address";
    }

    setError(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("form submitted");
      localStorage.setItem("user", JSON.stringify(formdata));
      setIsregistered(true);
     
      setFormdata({ name: '', email: '', mobile: '' });
    }
  };

  const handleLogin = (e) => {
      e.preventDefault();
     setFormdata({ name: '', email: '', mobile: '' });
  }

  return (
    <div className="box overlay">
      <div className="sidebar">
        <div className="sidebar-content">
          <button className="close-btn" onClick={setIsOpen}>
            <IoCloseOutline />
          </button>

          <h2>
            {isRegistered ? "Login" : "Signup"}
            <span>
              {isRegistered ? (
                <span
                  onClick={() => setIsregistered(false)}
                  style={{ color: "#ff5200", cursor: "pointer" }}
                >
                  or create an account
                </span>
              ) : (
                <span
                   onClick={() => {setIsregistered(true); setError({})}}
                  style={{ color: "#ff5200", cursor: "pointer" }}
                >
                  or login to your account
                </span>
              )}
            </span>
          </h2>
          <form onSubmit={isRegistered? handleLogin : handleSubmit}>
            <input
              type="tel"
              value={formdata.mobile}
              onChange={handleChange}
              name="mobile"
              placeholder="Phone number"
            />
           
         {!isRegistered &&
          <>
            <input
              type="text"
              value={formdata.name}
              onChange={handleChange}
              name="name"
              placeholder="Your name"
            />
            
            <input
              type="email"
              value={formdata.email}
              onChange={handleChange}
              name="email"
              placeholder="Your email"
            />
            </>
         }
              {Object.values(error).map((errmsg) => (
               <ul
              className="errorList"
              style={{
                color: "red",
                fontSize: "14px",
                margin: "5px 0",
                display: "flex",
                flexDirection: "column",
                gap: 0,
                padding:0
              }}
            > {errmsg} </ul>
              ))}
           
            <button className="loginbtn">
              {isRegistered ? "Login" : "Continue"}
            </button>
          </form>
        </div>

        <p className="note">
          By clicking on Login, I accept the Terms & Conditions & Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default SignInSidebar;
