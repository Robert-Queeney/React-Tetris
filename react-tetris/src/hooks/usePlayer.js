import { useState, useCallback } from 'react';
import { randomTetromino } from '../tetrominos';
import { STAGE_WIDTH } from '../gameHelpers';

export const usePlayer = () => {
    const [player, setPlayer] = useState({  //can set initial state here
        pos: { x: 0, y: 0 },
        tetromino: randomTetromino().shape, 
        collided: false,
    }); 

    const updatePlayerPos = ({ x, y, collided}) => {
        setPlayer(prev =>  ({
            ...prev, 
            pos: { x: (prev.pos.x += x), y: (prev.pos.y += y)}, 
            collided,
        })) // setting state above with new x and y values
    }
    
    //useCallback is a built in hook, and STAGE_WIDTH is from the helper file
    const resetPlayer = useCallback(() => {
        setPlayer({
            pos: {x: STAGE_WIDTH / 2 - 2, y: 0 }, 
            tetromino: randomTetromino().shape,
            collided: false,
        })
    }, [])

    return [player, updatePlayerPos, resetPlayer];
}