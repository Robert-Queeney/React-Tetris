import React from 'react'; 
import Cell from './Cell';

import { StyledStage } from './styles/StyledStage'


//need to verify props with proptype?
const Stage = ({ stage }) => (
    <StyledStage width={stage[0].length} height={stage.length}>
        {/* we map through stage array to get each row, then map through each row array to get the cells */}
        {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} /> ))}
    </StyledStage>
)

export default Stage; 