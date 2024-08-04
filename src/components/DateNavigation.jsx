// src/components/DateNavigation.js
import React from "react";

function DateNavigation({ currentDate, onNavigate }) {
  const formatDate = (date, view) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    switch (view) {
      case "daily":
        return date.toLocaleDateString(undefined, options);
      case "weekly":
        const startOfWeek = new Date(date);
        startOfWeek.setDate(date.getDate() - date.getDay());
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);
        return `${startOfWeek.toLocaleDateString(
          undefined,
          options
        )} - ${endOfWeek.toLocaleDateString(undefined, options)}`;
      case "monthly":
        return date.toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
        });
      case "yearly":
        return date.toLocaleDateString(undefined, { year: "numeric" });
      default:
        return date.toLocaleDateString(undefined, options);
    }
  };

  return (
    <div className="date-navigation">
      <button onClick={() => onNavigate(-1)}>Previous</button>
      <span>{formatDate(currentDate)}</span>
      <button onClick={() => onNavigate(1)}>Next</button>
    </div>
  );
}

export default DateNavigation;
