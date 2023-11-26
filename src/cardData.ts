import biomechBasilisk from "./assets/biomech-basilisk.png";
import celestialRavager from "./assets/celestial-ravager.png";
import chromatech from "./assets/chromatech.png";
import chronospike from "./assets/chronospike.png";
import galaxianLeviathan from "./assets/galaxian-leviathan.png";
import ionclawAlpha from "./assets/ionclaw-alpha.png";
import metamorphisaur from "./assets/metamorphisaur.png";
import plasmaDrifter from "./assets/plasma-drifter.png";
import synthrosaur from "./assets/synthrosaur.png";
import technovore from "./assets/technovore.png";
import voidshifter from "./assets/voidshifter.png";
import xenothrasher from "./assets/xenothrasher.png";

export type CardType = {
  id: number;
  name: string;
  url: string;
};

export const cardData: CardType[] = [
  {
    id: 0,
    name: "Biomech Basilisk",
    url: biomechBasilisk,
  },
  {
    id: 1,
    name: "Celestial Ravager",
    url: celestialRavager,
  },
  {
    id: 2,
    name: "Chromatech",
    url: chromatech,
  },
  {
    id: 3,
    name: "Chronospike",
    url: chronospike,
  },
  {
    id: 4,
    name: "Galaxian Leviathan",
    url: galaxianLeviathan,
  },
  {
    id: 5,
    name: "Ionclaw Alpha",
    url: ionclawAlpha,
  },
  {
    id: 6,
    name: "Metamorphisaur",
    url: metamorphisaur,
  },
  {
    id: 7,
    name: "Plasma Drifter",
    url: plasmaDrifter,
  },
  {
    id: 8,
    name: "Synthrosaur",
    url: synthrosaur,
  },
  {
    id: 9,
    name: "Technovore",
    url: technovore,
  },
  {
    id: 10,
    name: "Voidshifter",
    url: voidshifter,
  },
  {
    id: 11,
    name: "Xenothrasher",
    url: xenothrasher,
  },
];
