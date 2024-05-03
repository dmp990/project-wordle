import React from "react";
import { range } from "../../utils";

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
          {range(5).map((number) => (
            <span className="cell" key={number}></span>
          ))}
        </React.Fragment>
      )}
    </p>
  );
}

export default Guess;
