import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(){ //Function Component
    const randomNumber = Math.random();
    return(
        <div className = "App">{
            randomNumber < 0.5?
            <div> Defeat </div> : <div> Victory </div>
        }
        </div>
    );
}
export default App;