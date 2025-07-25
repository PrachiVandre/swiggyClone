import React, { useState } from "react";
import "./Header.css";
import Navbar from "../navbar/Navbar";
import swiggyClone from "../../assets/image/logo.png";
import { FaLocationArrow } from "react-icons/fa";

const Header = ({setIsOpen}) => {
  const [address, setAddress] = useState("");
  const [error, setError] = useState(null);

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
          );
          const data = await res.json();
          setAddress(data?.display_name);
        },
        (error) => {
          setError(error.message);
          setAddress(null);
        }
      );
    }
  };

  return (
    <div className="header">
      <div className="inner">
      <div className="lefts">
        <img src={swiggyClone} alt="swiggy logo" />
        <p onClick={handleLocation} className="location">
          <FaLocationArrow />
          {
            !address ? "Setup your precise location..." : `${address}...`
          }
        </p>
        {error && <p className="error-message">{error}</p>}
      </div>
      <div className="right">
        <Navbar setIsOpen={setIsOpen}/>
      </div>
      </div>
    </div>
  );
};

export default Header;
