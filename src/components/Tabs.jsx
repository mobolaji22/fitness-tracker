// src/components/Tabs.js
import React from "react";

function Tabs({ currentView, onChangeView }) {
  return (
    <div className="tabs">
      <button
        onClick={() => onChangeView("daily")}
        className={currentView === "daily" ? "active" : ""}
      >
        Daily
      </button>
      <button
        onClick={() => onChangeView("weekly")}
        className={currentView === "weekly" ? "active" : ""}
      >
        Weekly
      </button>
      <button
        onClick={() => onChangeView("monthly")}
        className={currentView === "monthly" ? "active" : ""}
      >
        Monthly
      </button>
      <button
        onClick={() => onChangeView("yearly")}
        className={currentView === "yearly" ? "active" : ""}
      >
        Yearly
      </button>
    </div>
  );
}

export default Tabs;
