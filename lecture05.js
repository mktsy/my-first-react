//สร้าง component ใช้เอง แบบ Function
import React from 'react';
import logo from './logo.svg'
import '.App.css';
function App(){
    return(
        <div className = "App">
            <p>เนื้อหาที่แสดงใน App Component!</p>
            <Post/>
        </div>
    );
}

export default App;