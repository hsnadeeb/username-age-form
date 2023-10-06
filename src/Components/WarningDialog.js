import React from "react";
import "./WarningDialog.css";

function WarningDialog({ show, message, onClose }) {
  return (
    show && (
      <div className="warning-dialog-overlay">
        <div className="warning-dialog">
          <p>{message}</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    )
  );
}

export default WarningDialog;