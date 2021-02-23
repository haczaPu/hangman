import React, { useEffect, useState } from "react";
import { useKey } from "react-use";
import "./Styles.css";
import Password from "./components/Password";
import MissedLetters from "./components/MissedLetters";
import Hangman from "./components/Hangman";
import Popup from "./components/Popup";

const App = () => {
  const [word, setWord] = useState([]);
  const [missedLetters, setMissedLetters] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);

  //Get word from API
  useEffect(() => {
    const getWord = async () => {
      const respone = await fetch(`https://random-word-api.herokuapp.com/word?number=1`);
      const data = await respone.json();
      // In future add check if word is too long
      const dataInArr = await data[0].split("");
      console.log(data);
      setWord(dataInArr);
    };

    getWord();
  }, []);

  //Guess letter on keyboard press
  useKey(event => {
    if (event.key.match(/([a-z])/) && win === false && gameOver === false) {
      if (word.some(letter => letter === event.key)) {
        setCorrectLetters([...correctLetters, event.key]);
      } else if (!missedLetters.includes(event.key)) {
        setMissedLetters([...missedLetters, event.key]);
      } else {
      }
    }
  });

  // useEffect(() => {
  //   const handleKeydown = event => {
  //     const { key, keyCode } = event;
  //     if (keyCode >= 65 && keyCode <= 90 && win === false && gameOver === false) {
  //       if (word.some(letter => letter === key)) {
  //         setCorrectLetters([...correctLetters, key]);
  //       } else if (!missedLetters.includes(key)) {
  //         setMissedLetters([...missedLetters, key]);
  //       } else {
  //       }
  //     }
  //   };

  //   window.addEventListener("keydown", handleKeydown);
  // });

  //Check lose
  useEffect(() => {
    if (missedLetters.length >= 11) {
      setGameOver(true);
    }
  }, [missedLetters]);

  //Check win
  useEffect(() => {
    let result = word.every(o => correctLetters.includes(o));
    if (result && correctLetters.length !== 0) {
      setWin(true);
    }
  }, [word, correctLetters]);

  return (
    <div className="App">
      <div className="triangle"></div>
      <Popup gameOver={gameOver} win={win} word={word} correctLetters={correctLetters} missedLetters={missedLetters} />
      <div className="topPanel">
        <Hangman missedLetters={missedLetters} />
        <MissedLetters missedLetters={missedLetters} />
      </div>
      <Password word={word} correctLetters={correctLetters} />
    </div>
  );
};

export default App;
