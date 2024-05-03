import React from "react";

function Guess({ guess, index, statusArr }) {
  return (
    <p className="guess" key={index}>
      {guess !== undefined ? (
        guess.split("").map((character, cindex) => {
          const classToApply = `cell ${statusArr[cindex].status}`;
          return (
            <span className={classToApply} key={`${cindex}-${character}`}>
              {character}
            </span>
          );
        })
      ) : (
        <React.Fragment key={index}>
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>
        </React.Fragment>
      )}
    </p>
  );
}

export default Guess;
