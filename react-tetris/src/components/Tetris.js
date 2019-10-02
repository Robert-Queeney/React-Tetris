import React, { useState } from 'react'; 

import { createStage } from '../gameHelpers';

//styled components
import { StyledTetris, StyledTetrisWrapper } from './styles/StyledTetris';

//custom hooks
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';

//components
import Stage from './Stage'; 
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {
    const [dropTime, setDropTime] = useState(null);
    const[gameOver, setGameOver] = useState(false);

    const [player, updatePlayerPos, resetPlayer] = usePlayer();
    const [stage, setStage] = useStage(player);

    console.log('re-render');

    const movePlayer = dir => {
        updatePlayerPos({ x:dir, y:0})
    }

    const startGame = () => {
        //Reset everything
        setStage(createStage());
        resetPlayer();
    }

    const drop = () => {
        updatePlayerPos({ x:0, y:1, collided: false})
    }

    const dropPlayer = () => {
        drop();
    }

    const move = ({ keycode }) => {
        if(!gameOver) {
            if(keycode === 37) {
                movePlayer(-1); //if 37 (left arrow) gets pressed player moves one space left
            } else if(keycode === 39) {
                movePlayer(1)
            } else if(keycode === 40) {
                dropPlayer();
            }
        }
    }

    return (
        // passing props into stlyed wrapper so it will take a keypress as an action
        <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>  
            <StyledTetris>
                <Stage stage={stage}/>
                <aside>
                    {gameOver ? (  // if it is game over display this
                        <Display gameOver={gameOver} text="Game Over" />
                    ): ( // if it is not game over display all of this
                    <div> 
                        <Display text="Score" />
                        <Display text="Rows" />
                        <Display text="Level" />
                    </div>
                    )}
                    <StartButton callback={startGame} />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
};

export default Tetris; 