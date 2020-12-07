import React from 'react';
const Post = (props) => {
    const myID = props.myID;
    const content = props.Children;
    return(
        <div>
            <h3> ผู้โพสต์: {myID}</h3>
            <p>Content {content}</p>
        </div>
    )
}
export default Post;