import React from "react";
import "./Css/Emailbody.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";

const Emailbody = ({name,Subject,message,time}) => {
  return (
    <div className="emailbody">
      <div className="Emailbody_left">
        <CheckBoxOutlineBlankIcon />
        <StarBorderIcon />
        <LabelOutlinedIcon />
        <h4>{name} </h4>
      </div>
      <div className="Emailbody_middle">
        <div className="Emailbody_middle_message">
          <p><b>{Subject}</b>{message}</p>
        </div>
      </div>
      <div className="Emailbody_right">
        <p> {time}</p>
      </div>
    </div>
  );
};

export default Emailbody;
