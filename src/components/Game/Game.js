import React from "react";
import GuessInput from "../GuessInput";

import { range, sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";

import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import DisplayBanner from "../DisplayBanner/DisplayBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  return (
    <>
      <div className="guess-results">
        {range(0, NUM_OF_GUESSES_ALLOWED).map((index) => {
          const currentGuess = guessList[index];
          statusArr = checkGuess(currentGuess, answer);
          return (
            <Guess
              guess={currentGuess}
              index={index}
              key={index}
              statusArr={statusArr}
            />
          );
        })}
      </div>
      {/*<ListGuesses guessList={guessList} />*/}
      {!guessList.includes(answer) && guessList.length !== 6 && (
        <GuessInput setGuessList={setGuessList} />
      )}
      {guessList.includes(answer) && (
        <DisplayBanner
          guessList={guessList}
          answer={answer}
          status={"WON"}
        />
      )}
      {guessList.length === 6 && (
        <DisplayBanner
          guessList={guessList}
          answer={answer}
          status={"LOST"}
        />
      )}
    </>
  );
}

export default Game;
