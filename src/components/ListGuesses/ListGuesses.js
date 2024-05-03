import React from "react";

function ListGuesses({ guessList }) {
  return (
    <div className="guess-results">
      {guessList.map((guess) => (
        <p className="guess" key={guess}>
          {guess}
        </p>
      ))}
    </div>
  );
}

export default ListGuesses;
