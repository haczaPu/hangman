import React from "react";

const Password = ({ word, correctLetters }) => {
  return (
    <div className="password">
      {word.map((letter, i) => {
        if (correctLetters.includes(letter)) {
          return (
            <div className="letter" key={i}>
              {letter}
            </div>
          );
        } else {
          return <div className="letter-covered" key={i}></div>;
        }
      })}
    </div>
  );
};

export default Password;
