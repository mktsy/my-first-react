import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(){
    const data01 = 20;
    const data02 = 15;
    return(
        <div className = "App">
            <p> ชื่อของผมคือ : {data01+data02}</p>
        </div>
    );
}
export default App;