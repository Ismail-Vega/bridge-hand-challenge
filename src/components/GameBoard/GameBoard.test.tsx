import '@testing-library/jest-dom';
import GameBoard from './GameBoard';
import { Provider } from 'react-redux';
import { store } from '../../state/store';
import { render, screen } from '@testing-library/react';
import cardData from '../../constants/cardsDataExample';

test('It renders 4 hands', () => {
    // Material ui components have some issues with typescript and testing using data-testid, we used a div as wrapper as workaround
    render(<Provider store={store}><div data-testid="testBoard"><GameBoard cards={cardData} /></div></Provider>);

    const boardContainer = screen.getByTestId('testBoard');
    const board = boardContainer.childNodes[0];
    expect(board.childNodes.length).toBe(4);
});