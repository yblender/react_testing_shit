import React, { useState } from 'react';
import ScoreBoard from './game-src/ScoreBoard'
import Ball from './game-src/Ball';
import MathShit from './game-src/MathShit';


function Game(){
    const[isCaught, setIsCaught] = useState(false);
    
    function onClickBall(){
        setIsCaught(true);
    }
    return(
        <div>
        <MathShit></MathShit>
        </div>
    )
}
export default Game;