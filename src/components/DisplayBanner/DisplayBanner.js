import React from "react";

function DisplayBanner({ guessList, answer, status }) {
  const winMessage = (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {guessList.length} guesses</strong>.
      </p>
    </div>
  );

  const loseMessage = (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );

  return <>{status === "WON" ? winMessage : loseMessage}</>;
}

export default DisplayBanner;
