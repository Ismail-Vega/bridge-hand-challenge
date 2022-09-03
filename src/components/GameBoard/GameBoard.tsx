import React from 'react'
import { useSelector, useDispatch } from "react-redux";

const GameBoard = () => {
    const appState = useSelector(
        (state) => state
    );

    console.log('state: ', appState);
    return (
        <div>GameBoard</div>
    )
}

export default GameBoard