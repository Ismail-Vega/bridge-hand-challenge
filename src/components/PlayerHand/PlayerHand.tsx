import React, { useEffect, useCallback } from 'react';
import { Card } from '../../types/card';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { PlayerHandProps } from './PlayerHandProps';
import { selectPoints, setPoints } from '../../state/features';
import { useAppDispatch, useAppSelector } from '../../hooks/state';
import calculatePointsBySuit from '../../utils/calculatePointsBySuit';

const PlayerHand = (props: PlayerHandProps) => {
    const { hand } = props;
    const { cards, position } = hand;
    const dispatch = useAppDispatch();
    const boardPoints = useAppSelector(selectPoints);

    const calculatePoints = useCallback(() => {
        if (cards) {
            const suitPoints = calculatePointsBySuit(cards);
            dispatch(setPoints({ position: position, suitPoints }));
        }
    }, [dispatch, cards, position]);

    useEffect(() => {
        calculatePoints();
    }, [calculatePoints]);

    const humanizeTotalPoints = (position: string) => {
        const suitPoints = boardPoints[hand.position];
        return Object.values(suitPoints).reduce((a, b) => a + b, 0)
    }

    return (
        <ul className='hand-grid p-relative'>
            {cards.map((card: Card, idx) => (
                <li
                    key={card.value + card.suit}
                    className={`hand-grid__item--${idx + 1}`}
                >
                    <img
                        style={{ width: '100%', height: '100%' }}
                        src={card.image}
                        alt={`${card.value} of ${card.suit.toLocaleLowerCase()}`}
                    />
                </li>
            ))}

            <AppBar
                color='primary'
                position='absolute'
                className='hand-grid__item--bar'
                sx={{
                    top: 'auto',
                    bottom: 0,
                    maxHeight: '24px',
                    borderRadius: '0 0 4px 4px',
                }}
            >
                <Typography
                    variant='subtitle2'
                    component='h2'
                    sx={{ margin: '4px' }}
                    className='hand-grid__item--label d-flex'
                >
                    <span>{hand.position}</span>
                    <span>{`Total Points: ${humanizeTotalPoints(hand.position)}`}</span>
                </Typography>
            </AppBar>
        </ul>
    );
};

export default PlayerHand;
