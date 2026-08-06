import React from "react";
import "../index.css";

function Announcement() {
  return (
    <div
      style={{
        backgroundColor: "#000000",
        color: "#ffffff",
        padding: "10px 0",
        overflow: "hidden",
        width: "100%",
      }}
    >
      <p
        style={{
          display: "inline-block",
          whiteSpace: "nowrap",
          animation: "marquee 18s linear infinite",
          fontSize: "13px",
          fontWeight: "600",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        
        }}
        className="mt-16"

      >
        🚚 Free Delivery on all orders! &nbsp;&nbsp;&nbsp; 🎁 Get yours now and get FREE SHIPPING
        at checkout &nbsp;&nbsp;&nbsp; 🚚 Free Delivery on all orders!
      </p>
    </div>
  );
}

export default Announcement;
