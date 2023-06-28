import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Emailist from "./Emailist";
import Compose from "./Compose";
import "./App.css";
import { useSelector } from "react-redux";
import { SelectsendMessageOpen } from "./features/MailSlice";

const App = () => {
  const isComposeOpen = useSelector(SelectsendMessageOpen);

  return (
    <div className="">
      <Header />
      <div className="app_body">
        <Sidebar />
        <Emailist />
      </div>
      {isComposeOpen && <Compose />}
    </div>
  );
};

export default App;
