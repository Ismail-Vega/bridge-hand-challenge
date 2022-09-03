import { Card } from '../types/card';
import { cardValues } from '../constants/cardValues';
import { SuitPoints } from '../state/store/storeTypes';

const calculatePointsBySuit = (cards: Card[]) => {
  const suitPoints: SuitPoints = {
    SPADES: 0,
    HEARTS: 0,
    DIAMONDS: 0,
    CLUBS: 0,
  };

  cards.forEach((val) => {
    if (isNaN(parseInt(val.value))) {
      suitPoints[val.suit] += cardValues[val.value] - 9;
    }
  });

  return suitPoints;
};

export default calculatePointsBySuit;
