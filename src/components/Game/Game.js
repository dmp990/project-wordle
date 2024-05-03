import React from "react";
import GuessInput from "../GuessInput";

import { range, sample } from "../../utils";
import { WORDS } from "../../data";
import ListGuesses from "../ListGuesses/ListGuesses";

import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  return (
    <>
      <div className="guess-results">
        {range(0, NUM_OF_GUESSES_ALLOWED).map((index) => (
          <Guess guess={guessList[index]} index={index} key={index} />
        ))}
      </div>
      {/*<ListGuesses guessList={guessList} />*/}
      <GuessInput setGuessList={setGuessList} />
    </>
  );
}

export default Game;
