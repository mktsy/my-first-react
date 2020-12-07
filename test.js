import React from 'react';
import logo from 'picture01';
import './App.css';

function App(){
    return(
        React.creativeElement(
            'div',{className: 'App'},
            React.creativeElement(p, null, 'เนื้อหาที่แสดงใน App Component')
        )
    );
}
export default App;