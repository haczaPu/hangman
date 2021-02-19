import React, { useEffect, useState } from "react";
import useKey from "use-key-hook";
import "./Styles.css";
import Password from "./components/Password";
import MissedLetters from "./components/MissedLetters";
import Hangman from "./components/Hangman";

const App = () => {
  const [word, setWord] = useState([]);
  const [missedLetters, setMissedLetters] = useState(["Y", "T", "O", "W", "H"]);
  const [hangman, setHangman] = useState([]);

  //Get word from API
  useEffect(() => {
    const getWord = async () => {
      const respone = await fetch(`https://random-word-api.herokuapp.com/word?number=1`);
      const data = await respone.json();
      const dataInArr = await data[0].split("");
      console.log(dataInArr);
      setWord(dataInArr);
    };
    // In future add check if word is too long
    getWord();
  }, []);

  //Guess letter on keyboard press

  useKey(
    (pressedKey, event) => {
      if (event.key.match(/([a-z])/)) {
        if (word.some(letter => letter === event.key)) {
          setMissedLetters(["a"]);
        }
      }
    },
    {
      detectKeys: [],
    }
  );

  return (
    <div className="App">
      <div className="topPanel">
        <Hangman />
        <MissedLetters missedLetters={missedLetters} />
      </div>

      <Password word={word} />
    </div>
  );
};

export default App;
