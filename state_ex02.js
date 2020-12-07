import React, {Component} from 'react';
class App extends Component{
    state = {
        id: '1',
        name: 'Bob' 
    }
    render(){
        return(
            <div>
                {this.state.name}
            </div>
        );
    }
}
export default App;