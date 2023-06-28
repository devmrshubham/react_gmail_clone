import React, { useEffect, useState } from "react";
import "./Css/Emaillist.css";
import EmaillistSetting from "./EmaillistSetting";
import Emailtype from "./Emailtype";
import Emailbody from "./Emailbody";
import { db } from "./fireStore";
import { collection, getDocs } from "firebase/firestore";

const Emailist = () => {
  const [email, setEmails] = useState([]);
  const getdata = async () => {
    const querySnapshot = await getDocs(collection(db, "emails"));
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      setEmails((prv)=>[...prv, data]);
    });
  };
  console.log(email);
  useEffect(() => {
    getdata();
  }, []);

  console.log(email)

  return (
    <div className="emaillist">
      <EmaillistSetting />
      <Emailtype />
      <div className="BodyContainer"></div>

      <Emailbody
        name={"shubham dewanan"}
        subject={"this is subject"}
        message={"we are learing React js"}
        time={"3:12 PM"}
      />
    </div>
  );
};

export default Emailist;
