import React from "react";

function ListGuesses({ guessList }) {
  return (
    <div className="guess-results">
      {guessList.map((guess, index) => (
        <p className="guess" key={`${index}-guess`}>
          {guess}
        </p>
      ))}
    </div>
  );
}

export default ListGuesses;
