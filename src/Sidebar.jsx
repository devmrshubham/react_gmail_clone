import React from "react";
import AddIcon from "@mui/icons-material/Add";
import "./Css/Sidebar.css";
import Sidebaroption from "./Sidebaroption";
import InboxIcon from "@mui/icons-material/Inbox";
import StarRateIcon from '@mui/icons-material/StarRate';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import DeleteIcon from '@mui/icons-material/Delete';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VideocamIcon from '@mui/icons-material/Videocam';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import { useDispatch } from "react-redux";
import  {openSendmessages} from "./features/MailSlice"
const Sidebar = () => {
  const dispatch = useDispatch()
  return (
    <div className="sidebar">
      <div staticon={<AddIcon />} onClick={()=>dispatch(openSendmessages())} className="btn_compose">
        <AddIcon /> compose
      </div>
      <Sidebaroption Icon={InboxIcon} title={"Inbox"} number={"224"} isActive={true} />
      <Sidebaroption Icon={StarRateIcon} title={"Started"} number={500} />
      <Sidebaroption Icon={WatchLaterIcon} title={"Snoozed"} number={300} />
      <Sidebaroption Icon={LabelImportantIcon} title={"Important"} number={"424"} />
      <Sidebaroption Icon={SendIcon} title={"Send"} number={"224"} />
      <Sidebaroption Icon={DraftsIcon} title={"Drafts"} number={"254"} />
      <Sidebaroption Icon={EventAvailableIcon} title={"Categories"} number={"224"} />
      <Sidebaroption Icon={DeleteIcon} title={"[Map]/trash"} number={"224"} />
      <Sidebaroption Icon={FindInPageIcon} title="Document" number={"224" } />
      <Sidebaroption Icon={ExpandMoreIcon} title="More" number={"224" } />
      <h3 className="Sidebaroption_heading">Meet</h3>
      <hr />
      <Sidebaroption Icon={VideocamIcon} title="New meeting" number={"224" } />
      <Sidebaroption Icon={KeyboardIcon} title="Join a meeting" number={"224" } />
      



   
    </div>
  );
};

export default Sidebar;
