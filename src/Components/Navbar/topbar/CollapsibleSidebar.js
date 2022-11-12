import React from "react";
import MenuItem from "./MenuItem";

export default function CollapsibleSidebar(props) {
  return (
    <>
      {!props.collapse ? (
        <></>
      ) : (
        <div className="CollapsibleSidebar-whole">
          <button onClick={props.collapsedSidebar}>Collapse sidebar</button>
          <div className="CollapsibleSidebar-profile">
            <img alt="" src={props.profileimg} />
            <p className="userName">{props.username}</p>
            <p className="userCell">Mobile:{props.usercell}</p>
          </div>
          <MenuItem icon="" text="Scan Code" />
          <MenuItem icon="" text="My Wallet" />
          <MenuItem icon="" text="Scheme" />
          <MenuItem icon="" text="History" />
          <MenuItem icon="" text="Privacy Policy" />
          <MenuItem icon="" text="Terms and Conditions" />
          <MenuItem icon="" text="Logout" />
        </div>
      )}
    </>
  );
}
