import React from "react";
import "./Css/Emailtype.css";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const Emailtype = () => {
  return (
    <div className="Emailtype">
      <div className="Emailtype_section">
        <div className=" Email_option  email_option--active">
          <InboxIcon />
          <p>Primary</p>
        </div>
        <div className=" Email_option">
          <PeopleIcon />
          <p>Social</p>
        </div>
        <div className=" Email_option">
          <LocalOfferIcon />
          <p>Promotions</p>
        </div>
      </div>
    </div>
  );
};

export default Emailtype;
