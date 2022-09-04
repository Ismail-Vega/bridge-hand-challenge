import '@testing-library/jest-dom';
import PlayerHand from './PlayerHand';
import { Provider } from 'react-redux';
import { store } from '../../state/store';
import { render, screen } from '@testing-library/react';
import handData from '../../constants/handsDataExample';

test('It renders 13 cards and 1 header item', () => {
    // Material ui components have some issues with typescript and testing using data-testid, we used a div as wrapper as workaround
    render(<Provider store={store}><div data-testid="testHand"><PlayerHand hand={handData} /></div></Provider>);

    const handContainer = screen.getByTestId('testHand');
    const hand = handContainer.childNodes[0];
    const handLength = hand.childNodes.length;
    const header = hand.childNodes[handLength - 1] as HTMLElement;

    // Additional item with player name and total points
    expect(hand.childNodes.length).toBe(14);
    expect(header.tagName).toEqual('HEADER');
});