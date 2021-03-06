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
