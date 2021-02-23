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

/* <Letter key={i} value={letter} /> */
/* <div className="letter" key={i}>
            {correctLetters.includes(letter) ? letter : ""}
          </div> */

// return (
//   <div className="letter" key={i}>
//     {correctLetters.includes(letter) ? letter : ""}
//   </div>
