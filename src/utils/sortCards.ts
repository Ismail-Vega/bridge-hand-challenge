import { suits } from '../constants/suitsTypes';
import { cardValues } from '../constants/cardValues';

const sortCards = (arr: any[]) => {
  const sortedArray = [...arr];
  return sortedArray.sort((a, b) => {
    if (a.suit === b.suit) {
      return cardValues[b.value] - cardValues[a.value];
    }

    return suits[b.suit] - suits[a.suit];
  });
};

export default sortCards;
