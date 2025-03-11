// 2 ghonta 40 min
import React from "react";

const PopupContent = ({ copied }) => {
  return (
    <section>
      {copied && (
        <div
          style={{
            position: "absolute",
            bottom: "3rem",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#333",
            color: "#fff",
            padding: "8px 12px",
            borderRadius: "5px",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          Copied to Clipboard ✅
        </div>
      )}
    </section>
  );
};

export default PopupContent;
