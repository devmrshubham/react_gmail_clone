import React from "react";
import "./Css/Sidebaroption.css";
const Sidebaroption = ({ Icon, title, number, isActive }) => {
  return (
    <div className={`Sidebaroption  ${isActive && "Sidebaroption--active" }  `}>
      <Icon />
      <h2>{title} </h2>
      <p>{number} </p>
    </div>
  );
};

export default Sidebaroption;
