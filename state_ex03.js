import React, {Component} from React;
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: '1',
            name: props.name
        }
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