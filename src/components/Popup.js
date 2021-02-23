import React from "react";

const handleNewWordBtn = () => {
  window.location.reload();
};

const Popup = ({ gameOver, win, word, correctLetters, missedLetters }) => {
  return (
    <div>
      {gameOver ? (
        <div className="gameOver">
          <div>GAME OVER</div>
          <div className="popup-word">WORD: {word}</div>
          <button onClick={handleNewWordBtn}>NEW WORD</button>
        </div>
      ) : (
        ""
      )}

      {correctLetters.length === 0 && missedLetters.length === 0 ? (
        <div className="start-info">Type any letter to guess the word</div>
      ) : win ? (
        <div className="gameOver">
          <div>YOU WON!</div>
          <button onClick={handleNewWordBtn}>NEW WORD</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Popup;

// const Popup = ({ gameOver, word, correctLetters, missedLetters }) => {
//   return (
//     <div>
//       {gameOver ? (
//         <div className="gameOver">
//           <div>GAME OVER</div>
//           <div className="popup-word">WORD: {word}</div>
//           <button onClick={handleNewWordBtn}>NEW WORD</button>
//         </div>
//       ) : (
//         ""
//       )}

//       {correctLetters.length === 0 && missedLetters.length === 0 ? (
//         <div className="start-info">Type any letter to guess the word</div>
//       ) : (
//         ""
//       )}
//     </div>
//   );
// };
