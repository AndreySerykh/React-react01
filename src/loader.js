import React from "react";

function Loader() {
  return (
    <div style={{ 
        display: "flex",
        justifyContent: "center"
    }}>
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader