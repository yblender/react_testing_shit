import React, { useState } from 'react';

function ScoreBoard(props : any){
    const[score, setScore] = useState(0);
    if(props.isCorrect){
        setScore(score + 1);
    }
    return(
        <div>
            <table>
                <thead>
                    <th>Score</th>
                </thead>
                <tbody>

                    <tr>
                        <td>{props.score}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default ScoreBoard;