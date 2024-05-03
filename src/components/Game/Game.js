import React from "react";
import GuessInput from "../GuessInput";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import DisplayBanner from "../DisplayBanner/DisplayBanner";
import ListGuesses from "../ListGuesses/ListGuesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  return (
    <>
      <ListGuesses guessList={guessList} answer={answer} />
      <GuessInput
        setGuessList={setGuessList}
        disabled={guessList.includes(answer) || guessList.length === 6}
      />
      {guessList.includes(answer) && (
        <DisplayBanner guessList={guessList} answer={answer} status={"WON"} />
      )}
      {guessList.length === 6 && (
        <DisplayBanner guessList={guessList} answer={answer} status={"LOST"} />
      )}
    </>
  );
}

export default Game;
