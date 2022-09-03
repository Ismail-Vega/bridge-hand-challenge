import React, { useState, useEffect, useMemo } from 'react'
import PlayerHand from '../PlayerHand';
import { Hand } from '../../types/hand';
import { useAppSelector } from '../../hooks/state';
import { selectPoints } from '../../state/features';
import useDeckService from '../../hooks/API/useDeckService';
import splitIntoSortedChunks from '../../utils/splitIntoSortedChunks';

const GameBoard = () => {
    const boardPoints = useAppSelector(selectPoints);
    console.log('boardPoints: ', boardPoints);
    const { status, error, payload } = useDeckService();
    const [boardReady, setBoardReady] = useState(false);

    const boardHands = useMemo<Hand[]>(() => {
        const newList = [...payload]

        if (boardReady && newList.length) {
            return splitIntoSortedChunks(newList, 13);
        }

        return []
    }, [boardReady, payload])

    useEffect(() => {
        if (!error && status === 'loaded') {
            setBoardReady(true);
        }
    }, [status, error])

    return (
        <div className="bridge-board">
            {boardHands.length && boardHands.map((hand) => <PlayerHand key={hand.position} hand={hand} />)}
        </div>
    )
}

export default GameBoard