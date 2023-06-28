import React from "react";
import "./Css/EmaillistSetting.css";

import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const EmaillistSetting = () => {
  return (
    <div className="Emaillist_setting">
      <div className="Emailsetting_Left">
        <CheckBoxOutlineBlankIcon />
        <ArrowDropDownIcon />
        <RefreshIcon />
        <MoreVertIcon />
      </div>
      <div className="Emailsetting_Right">
        <p>1-50 of 10,222</p>
        <ChevronLeftIcon />
        <ChevronRightIcon />
      </div>
    </div>
  );
};

export default EmaillistSetting;
