import React from 'react';
import Post from './Post';

const Posts = ({posts}) => {
    return (
        <div>
            {posts.map((page, index) => 
               <Post page={page} key={index}/>
            )}
        </div>
    )
}


export default Posts
