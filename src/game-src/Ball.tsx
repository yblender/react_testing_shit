import React, { useState } from 'react';
import './Ball.css';

function Ball(props : any){
    console.log(props);
    const [position, setPosition] = useState({
        x: 300,
        y: 300
      });
      const[timeoutId, setTimeoutId] = useState(
      setTimeout(function(){
          if(props.isCaught){
            return;
          }
      var newPositions = getNewPosition(position.x, position.y);  
      console.log(newPositions);  
      setPosition({
          x: newPositions.newX,
          y: newPositions.newY
      })}, 50));
    
    var ballClass = "";
    var textClass = "hidden";
    if(props.isCaught){
        ballClass = "fade-out";
        textClass = "fade-in";
    }
    return(
        <div      
      >
      <div className={ballClass} style={{
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -10,
        top: -10,
        width: 20,
        height: 20,
      }}
      />
      <h1 className={textClass}>Fuck you max</h1>
    </div>
    )
}

function getNewPosition(currentX: number, currentY: number){
    var xMinus = 10;
    if(currentX < -100){
        xMinus = 0;
    }
    if(currentX > 400){
        xMinus = 10;
    }
    var changeX = Math.floor(Math.random() * 21) - xMinus;
    var changeY = Math.floor(Math.random() * 21) - 10;
    
    return {newX : currentX + changeX, newY: currentY + changeY};
}
export default Ball;