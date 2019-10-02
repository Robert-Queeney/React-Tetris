export const STAGE_WIDTH = 12; 
export const STAGE_HEIGHT = 20;

//function that creates multidimensional stage for game
export const createStage = () => 
//creating new Array from another Array(stage height), then supply an inline function that creates a new array for each row and fills it with cells based on the stage width
    Array.from(Array(STAGE_HEIGHT), ()=>
        new Array(STAGE_WIDTH).fill([0, 'clear'])
    )
