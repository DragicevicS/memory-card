type AlertWindowProps = {
  isVisible: boolean;
  currentScore: number;
  bestScore: number;
  gameBeaten: boolean;
  setShowAlert: (value: boolean) => void;
  setCurrentScore: (value: number) => void;
};

const AlertWindow: React.FC<AlertWindowProps> = ({
  isVisible,
  currentScore,
  bestScore,
  gameBeaten,
  setShowAlert,
  setCurrentScore,
}) => {
  if (!isVisible) return null;

  return (
    <div className="flex flex-col px-10 py-6 mt-10 bg-gray text-white text-lg rounded-md animate-fadeIn">
      <h2
        className={`text-center text-2xl font-bold mb-4 ${
          gameBeaten ? "text-green" : "text-red"
        }`}
      >
        {gameBeaten ? "Congratulations!" : "Game Over"}
      </h2>
      <p>
        {gameBeaten
          ? "You've beaten the game and achieved the maximum score!"
          : "You clicked the same card twice."}
      </p>
      <p className="mt-2">Your Score: {currentScore}</p>
      <p>Best Score: {bestScore}</p>
      <button
        type="button"
        className="w-max px-3 py-1 mt-3 ml-auto mr-auto hover:bg-blue rounded-sm"
        onClick={() => {
          setShowAlert(false);
          setCurrentScore(0);
        }}
      >
        {gameBeaten ? "Play again!" : "Try again!"}
      </button>
    </div>
  );
};

export default AlertWindow;
