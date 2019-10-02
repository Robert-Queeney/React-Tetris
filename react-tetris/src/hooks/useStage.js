import { useState, useEffect } from 'react';  //useEffect is a replacement for the lifecycle methods
import { createStage } from '../gameHelpers';

export const useStage = (player, resetPlayer) => {
    const [stage, setStage] = useState(createStage());

    useEffect(() => {
        const updateStage = prevStage => {
            //first flush the stage
            const newStage = prevStage.map(row =>
                row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell)),
                //maps throgh twice b/c it is a multidimensional layout
                //checks to see if the second value in cell array is 'clear'
                //then return an empy cell if true, or cell as is if false
            );
            //then draw tetromino - loop through tetromino and figure out which cells are occupied
            player.tetromino.forEach((row, y) => {
                row.forEach((value, x) => {
                    if(value !==0){
                        newStage[y + player.pos.y][x + player.pos.x] = [
                            value, 
                            `${player.collided ? 'merged' : 'clear'}`,
                        ];
                    }
                });
            });

            return newStage;
        };

        setStage(prev => updateStage(prev))

    }, [])

    return [stage, setStage];
}