import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(){
    const name = 'Jotaro'
    return(
        <div className = "App">
            <p> ชื่อของผมคือ : {name}</p>
        </div>
    );
}
export default App;