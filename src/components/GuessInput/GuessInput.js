import React from "react";

function GuessInput({ setGuessList, disabled }) {
  const [guess, setGuess] = React.useState("");

  function handleFormSubmission(event) {
    event.preventDefault();
    console.log({ guess });
    setGuessList((currGuessList) => [...currGuessList, guess]);
    setGuess("");
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleFormSubmission}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={disabled}
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        pattern="[\w]{5}"
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
