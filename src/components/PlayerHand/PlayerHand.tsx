import React, { useEffect, useCallback } from 'react'
import { useAppDispatch } from '../../hooks/state';
import { PlayerHandProps } from './PlayerHandProps';
import calculatePointsBySuit from '../../utils/calculatePointsBySuit';
import { setPoints } from '../../state/features';

const PlayerHand = (props: PlayerHandProps) => {
    const { hand } = props;
    const dispatch = useAppDispatch();

    const calculatePoints = useCallback(() => {
        if (hand) {
            const suitPoints = calculatePointsBySuit(hand.cards);
            dispatch(setPoints({ position: hand.position, suitPoints }));
        }
    }, [dispatch, hand]
    );

    useEffect(() => {
        calculatePoints();
    }, [calculatePoints]);

    console.log('props: ', props);
    return (
        <div>PlayerHand</div>
    )
}

export default PlayerHand