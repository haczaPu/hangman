import React from "react";

const MissedLetters = ({ missedLetters }) => {
  return (
    <div className="missedLetters">
      You missed:
      <div>{missedLetters}</div>
    </div>
  );
};

export default MissedLetters;
