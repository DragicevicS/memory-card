import { CardType } from "../cardData.ts";

type CardDisplayProps = {
  cards: CardType[];
  onCardClick: (id: number) => void;
  animationKey: number;
};

const CardDisplay: React.FC<CardDisplayProps> = ({
  cards,
  onCardClick,
  animationKey,
}) => {
  return (
    <div
      key={animationKey}
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 animate-fadeIn"
    >
      {cards.map((card) => (
        <div
          key={card.id}
          className="flex flex-col items-center md:p-1 text-center text-white border-2 border-white cursor-pointer hover:-translate-y-1 ease duration-150"
          onClick={() => onCardClick(card.id)}
        >
          <img
            src={card.url}
            alt="Card"
            draggable="false"
            loading="eager"
            className="w-28 h-[75px] md:w-48 md:h-32 lg:w-52 lg:h-[139px] xl:w-60 xl:h-40 cursor-pointer"
          />
          <h3 className="w-min lg:w-max text-sm md:text-base cursor-pointer">
            {card.name}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default CardDisplay;
