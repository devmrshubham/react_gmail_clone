import { useState } from "react";
import "./Css/Compose.css";
import RemoveIcon from "@mui/icons-material/Remove";
import HeightIcon from "@mui/icons-material/Height";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import LinkIcon from "@mui/icons-material/Link";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import PhotoIcon from "@mui/icons-material/Photo";
import PhonelinkLockIcon from "@mui/icons-material/PhonelinkLock";
import CreateIcon from "@mui/icons-material/Create";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { CloseSendmessages } from "./features/MailSlice";
import { collection, addDoc } from "firebase/firestore";
import { Timestamp } from "firebase/firestore";

import { db } from "./fireStore";

const Compose = () => {
  const dispatch = useDispatch();
  const [to, setTo] = useState("");
  const [Subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const formSubmit = async (e) => {
    e.preventDefault();
    if (to == "") {
      return alert("to is required");
    }
    if (Subject == "") {
      return alert("Subject is required");
    }
    if (message == "") {
      return alert("messsage is required");
    }

    try {
      const docRef = await addDoc(collection(db, "emails"), {
        to,
        Subject,
        message,
        dateExample: Timestamp.fromDate(new Date()),
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    setTo("");
    setMessage("");
    setSubject("");
    alert("email send successfully");
    dispatch(CloseSendmessages());
  };
  return (
    <div className="Compose">
      <div className="Compose_header">
        <div className="Copmpose_header_left">
          <span>New Message</span>
        </div>

        <div className="Compose_header_right">
          <RemoveIcon />

          <HeightIcon />

          <CloseIcon onClick={() => dispatch(CloseSendmessages())} />
        </div>
      </div>

      <form onSubmit={formSubmit}>
        <div className="Compose_body">
          <div className="Compose_bodyform">
            <input
              type="text"
              placeholder="Reciepents"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />

            <input
              type="text"
              placeholder="Subject"
              value={Subject}
              onChange={(e) => setSubject(e.target.value)}
            />

            <textarea
              name=""
              id=""
              cols="30"
              rows="20"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="Compose_footer">
          <div className="Compose_footer_left">
            <button type="submit">
              Send <ArrowDropDownIcon />{" "}
            </button>
          </div>
          <div className="Compose_footer_right">
            <FormatColorTextIcon />
            <AttachFileIcon />
            <LinkIcon />
            <InsertEmoticonIcon />
            <NoteAddIcon />
            <PhotoIcon />
            <CreateIcon />
            <MoreVertIcon />
            <DeleteIcon />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Compose;
