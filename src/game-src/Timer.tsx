import React, { useEffect, useState } from 'react';
import { getNodeMajorVersion } from 'typescript';
function Timer(props :any){
//     const [timer, setTimer] = useState(100);
//     console.log(props);
//     if(props.timer < 100){
//         setTimer(props.timer);
//     }
    
//    useEffect(
//        () => {
//         var timerId = setTimeout(function(){
//             console.log("tock" + timer);
//             if(timer <= 0){
//                 clearTimeout(timerId);
//                 return;
                
//             }
//             setTimer(timer - 10);
            
//         }, 1000)
//        }
//    )     
        
    
    return(
        <div className='timer' style={{
            backgroundColor:'red',
            height:"10px",
            width: props.timer + '%'
        }}></div>
    );
}
export default Timer;