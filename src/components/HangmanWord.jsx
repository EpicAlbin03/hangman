const HangmanWord = ({ guessedLetters, wordToGuess, reveal = false }) => {
  return (
    <div className="flex gap-1 text-8xl font-bold uppercase font-mono">
      {wordToGuess.split("").map((letter, index) => {
        return (
          <span className="border-b-2 border-neutral" key={index}>
            <span
              className={`${
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "invisible"
              } ${
                !guessedLetters.includes(letter) && reveal
                  ? "text-error"
                  : "text-neutral"
              }`}
            >
              {letter}
            </span>
          </span>
        );
      })}
    </div>
  );
};

export default HangmanWord;
