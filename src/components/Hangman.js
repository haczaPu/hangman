import React from "react";

const Hangman = ({ missedLetters }) => {
  return (
    <div className="hangman">
      <img src="part0.png" alt="hangman" className="hangman-part0" />
      {missedLetters.map((element, i) => {
        return i <= missedLetters.length - 1 ? (
          <img src={`part${i + 1}.png`} alt="hangman" className={`hangman-part${i + 1}`} key={element} />
        ) : (
          ""
        );
      })}
    </div>
  );
};

export default Hangman;

// for (let i=1 ; i<=(missedLetters.length - 1)  ; i+1) {
//   return <img src={`part${i}.png`} alt="hangman" className={`hangman-part${i}`} key={i} />
// }

// {missedLetters.map((element, i) => {
//         return <img src={`part${i + 1}.png`} alt="hangman" className={`hangman-part${i + 1}`} key={element} />;
//       })}
