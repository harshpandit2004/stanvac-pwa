import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import NotificationsPage from "./Notifications/NotificationsPage";
import CollapsibleSidebar from "./topbar/CollapsibleSidebar";

function Navbarcmp() {
  const [sidebar, setSidebar] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const uncollapseNotifications = () => {
    setNotifications(true);
  };
  const collapseNotifications = () => {
    setNotifications(false);
  }
  const uncollapsedSidebar = () => {
    setSidebar(true)
  }
  const collapsedSidebar = () => {
    setSidebar(false)
  }
  return(
      <Navbar>
        {!sidebar? <button onClick={uncollapsedSidebar}>Uncollapse Sidebar</button> : <CollapsibleSidebar collapse = {sidebar} collapsedSidebar={collapsedSidebar}/>}
        <p>Logo</p>
        {!notifications? <button onClick={uncollapseNotifications}>Uncollapse Notifications</button> : <NotificationsPage collapseNotifications={collapseNotifications}/>}        
      </Navbar>
  );
}

export default Navbarcmp;
