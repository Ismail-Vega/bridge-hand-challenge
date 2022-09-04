import React, { useMemo } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PlayerHand from '../PlayerHand';
import { Hand } from '../../types/hand';
import { Card } from '../../types/card';
import splitIntoSortedChunks from '../../utils/splitIntoSortedChunks';

const GameBoard = ({ cards }: { cards: Card[] }) => {
    const boardHands = useMemo<Hand[]>(() => {
        const newList = [...cards]

        if (newList.length) {
            return splitIntoSortedChunks(newList, 13);
        }

        return []
    }, [cards])

    return (
        <Box className="board-game board-grid">
            {boardHands.length && boardHands.map((hand, idx) =>
                <Grid item xs={4} className={`board-grid__item--${idx} d-flex items-center`} key={hand.position}>
                    <PlayerHand key={hand.position} hand={hand} />
                </Grid>
            )
            }
        </Box >
    )
}

export default GameBoard