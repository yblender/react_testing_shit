import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { rootCertificates } from 'tls';
import App from './App';


function Menu(){
    const [count, setCount] = useState(0);
    function HandleMenuClick(){
        setCount(count + 1);
    }
    return(
        <div>
        <button onClick={HandleMenuClick}>test 1</button>
        <p>test {count}</p>
        </div>
    );
}

export default Menu;
