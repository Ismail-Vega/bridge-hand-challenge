import sortCards from './sortCards';
import { playerNames } from '../constants/playerNames';

export default function splitIntoSortedChunks(arr: any[], chunk: number) {
  let result = [];

  for (let i = 0; i < arr.length; i += chunk) {
    const sortedChunk = sortCards(arr.slice(i, i + chunk));
    result.push({
      position: playerNames[i],
      cards: sortedChunk,
    });
  }

  return result;
}
