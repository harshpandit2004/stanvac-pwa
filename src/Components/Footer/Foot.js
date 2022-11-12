import React from "react";

export default function Foot(props) {
  return (
    <footer className="foot">
      <div className="foot-CC">
        <i>Call ico</i>
        <div className="foot-stuff">
          <p className="foot-title">Customer care</p>
          <p className="CCNum">****{props.ccnum}</p>
        </div>
      </div>
    </footer>
  );
}
