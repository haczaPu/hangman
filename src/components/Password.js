import React from "react";
import Letter from "./Letter";

const Password = ({ word }) => {
  return (
    <div className="password">
      {word.map(letter => (
        <Letter letter={letter} />
      ))}
    </div>
  );
};

export default Password;
