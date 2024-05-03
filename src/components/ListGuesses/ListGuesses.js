import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
import Guess from "../Guess/Guess";

function ListGuesses({ guessList, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => {
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
  );
}

export default ListGuesses;
