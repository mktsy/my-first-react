import React, {Component} from 'react';

class postClass extends Component{
  render(){
    return(
      <div>
        <h3>ผู้โพสต์ : {this.props.myID}</h3>
        <p>Content{this.props.children}</p>
      </div>
    )
  }
}

export default postClass;