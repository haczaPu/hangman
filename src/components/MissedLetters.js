import React from "react";

const MissedLetters = ({ missedLetters }) => {
  return (
    <div className="missedLetters-container">
      <div>YOU MISSED:</div>
      {missedLetters.map((letter, i) => {
        return (
          <div className="missedLetter" key={i}>
            {letter}
          </div>
        );
      })}
    </div>
  );
};

export default MissedLetters;
