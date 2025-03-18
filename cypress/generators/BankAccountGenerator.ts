import { banks } from "../data/banksData";

export function getRandomBank() {
    const randomIndex = Math.floor(Math.random() * banks.length);
    return banks[randomIndex];
  }
