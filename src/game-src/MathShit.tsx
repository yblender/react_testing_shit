import { off } from 'process';
import React, { useEffect, useRef, useState } from 'react';
import { start } from 'repl';
import ScoreBoard from './ScoreBoard';
import './MathShit.css';
import Timer from './Timer';

function MathShit(){
    const [currentNumber, setNumber] = useState(0);
    const [isCorrect, setIsCorrect] = useState(false)
    const [isLoser, setIsLoser] = useState(false);
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(100);
    const [operator, setOperator] = useState('');
    const [operatorNumber, setOperatorNumber] = useState(-0);
    const [possibleAnswers, setPossibleAnswers] = useState([0])
    const t = useRef<NodeJS.Timer>();
    const timerLimit = 50;
    useEffect(
        () => {
        
         t.current = setTimeout(function(){
             console.log("tock" + timer);
             if(timer <= 0 || isLoser){
                 clearTimeout(t.current);
                 setIsLoser(true);
                 return;
                 
             }             
             setTimer(timer - 10);
             
         }, 1000)
        
        }
    )  
        //if(timer >= 100){
            if(operator == '')
                setOperator(GetOperator());
            if(operatorNumber == -0)
                setOperatorNumber(GetOperatorNumber());
            if(possibleAnswers.length == 1 && operator != '' && operatorNumber != -0)
                setPossibleAnswers(GetPossibleAnswers(operator, currentNumber, operatorNumber));
            
        //}
  

    

    function chooseAnswer(selectedAnswer : number){
        clearTimeout(t.current);
        var realAnswer = Operate(operator, currentNumber, operatorNumber);
        if(selectedAnswer == realAnswer){
            setIsCorrect(true);
            setNumber(realAnswer);
            setScore(score + 1);
            resetNumbers();

        }
        else{
            setIsLoser(true);
        }

    }

    function resetNumbers(){
        setTimer(timerLimit);
        setOperator('');
        setOperatorNumber(-0);
        setPossibleAnswers([0]);
        //setIsCorrect(false);
    }
    function resetGame(){
        setScore(0);
        resetNumbers();
        setIsLoser(false);
        setIsCorrect(false);
    }
    var gameClass = "";
    var textClass = "hidden";
    if(isLoser){
        gameClass = "fade-out";
        textClass = "fade-in";
    }
   
    return(
        <div className='game'>            
            <div className={gameClass + ' container'}>
                <div className='row'>
                    <div className='top-row col-sm'>{currentNumber}</div>
                    <div className='top-row col-sm'>{operator}</div>
                    <div className='top-row col-sm'>{operatorNumber}</div>
                </div>
                <div className='row'>
                    <div className='bot-row col-sm' onClick={() => chooseAnswer(possibleAnswers[0])}>{possibleAnswers[0]}</div>
                    <div className='bot-row col-sm' onClick={() => chooseAnswer(possibleAnswers[1])}>{possibleAnswers[1]}</div>
                    <div className='bot-row col-sm' onClick={() => chooseAnswer(possibleAnswers[2])}>{possibleAnswers[2]}</div>
                </div>
            </div>
            <h1 className={textClass}>You lose, dumbass.</h1>
            <button onClick={resetGame} className={textClass}>Play Again</button>
            <Timer timer={timer}></Timer>
            <ScoreBoard score={score}></ScoreBoard>
        </div>
    )
}
function GetOperator(){
    var operators = ['+', '-', 'x']
    var index = Math.floor(Math.random() * 3);
    
    return operators[index];
}
function GetOperatorNumber(){
    return Math.floor(Math.random() * 11);
}
function Operate(operator : string, startingNumber : number, operatorNumber : number){
    var realAnswer = 0;
    if(operator === '+')
        realAnswer = startingNumber + operatorNumber;
    if(operator === '-')
        realAnswer = startingNumber - operatorNumber;
    if(operator === 'x')
        realAnswer = startingNumber * operatorNumber;
    return realAnswer;
}
function GetPossibleAnswers(operator : string, startingNumber : number, operatorNumber : number){
    var realAnswer = Operate(operator, startingNumber, operatorNumber);
    var fakeAnswer1 = startingNumber + Math.floor(Math.random() * 21) - 10;
    var fakeAnswer2 = startingNumber + Math.floor(Math.random() * 21) - 10;
    var answers = [realAnswer, fakeAnswer1, fakeAnswer2];
    console.log(answers);
    return answers.sort((a,b) => 0.5 - Math.random());
}
export default MathShit;