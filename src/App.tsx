import { useEffect, useState } from "react";
import CardDisplay from "./components/CardDisplay.tsx";
import AlertWindow from "./components/AlertWindow";
import { cardData, CardType } from "./cardData.ts";

const App: React.FC = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState<CardType[]>([]);
  const [clickedCards, setClickedCards] = useState<number[]>([]);
  const [animationKey, setAnimationKey] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  const shuffleArray = (array: CardType[]): CardType[] => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  useEffect(() => {
    const shuffledCards = shuffleArray(cardData);
    setCards(shuffledCards);
  }, []);

  const handleCardClick = (clickedCardId: number) => {
    if (clickedCards.includes(clickedCardId)) {
      setShowAlert(true);
      setClickedCards([]);
      const shuffledCards = shuffleArray(cardData);
      setCards(shuffledCards);
    } else {
      setCurrentScore(currentScore + 1);
      if (currentScore + 1 >= bestScore) {
        setBestScore(currentScore + 1);
      }

      setClickedCards((prevClickedCards) => [
        ...prevClickedCards,
        clickedCardId,
      ]);

      const shuffledCards = shuffleArray(cards);
      setCards(shuffledCards);
    }
    if (currentScore + 1 === 12) {
      setShowAlert(true);
    }
    setAnimationKey((prevKey) => prevKey + 1);
  };

  return (
    <>
      <header className="flex flex-col md:flex-row gap-1 justify-around items-center w-full p-4 bg-gray text-red">
        <h1 className="text-lg lg:text-3xl italic">
          Memory card game: Sci-Fi Beasts Edition
        </h1>
        <div className="text-lg">
          <div className="flex gap-2">
            <h2 className="text-white">Current score:</h2>
            <h2>{currentScore}</h2>
          </div>
          <div className="flex justify-end gap-2">
            <h2 className="text-white">Best score:</h2>
            <h2>{bestScore}</h2>
          </div>
        </div>
      </header>
      <main className="flex flex-grow flex-col items-center gap-12 p-3 lg:p-10 bg-blue">
        {!showAlert ? (
          <>
            <p className="text-white text-xl">
              Get points by clicking on an image but don't click on any more
              than once!
            </p>
            <CardDisplay
              cards={cards}
              onCardClick={handleCardClick}
              animationKey={animationKey}
            />
          </>
        ) : (
          <AlertWindow
            isVisible={showAlert}
            currentScore={currentScore}
            bestScore={bestScore}
            gameBeaten={currentScore === 12}
            setShowAlert={setShowAlert}
            setCurrentScore={setCurrentScore}
          />
        )}
      </main>
      <footer className="flex justify-center items-center w-full h-8 bg-gray text-white italic">
        <p>Copyright © 2023 DragicevicS</p>
      </footer>
    </>
  );
};

export default App;
