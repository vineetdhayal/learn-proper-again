import React from 'react';
import './loading.css';

const Loading = () => {
    const arr = new Array(3).fill(0);

    const POSTS_URL = `https://jsonplaceholder.typicode.com/posts`;
    const COMMENTS_URL = `https://jsonplaceholder.typicode.com/comments`;

    const fetchData = async () => {
        let [posts, comments] = await Promise.all([fetch(POSTS_URL).then((res) => res.json()), fetch(COMMENTS_URL).then((res) => res.json())]);

        console.log(posts, comments);
        const mappedData = posts.reduce((post, currPost) => {
            const currComments = comments.filter((c) => c.postId === currPost.id);
            post[currPost.id] = currComments;
            return post
        }, {});
        console.log(mappedData);
    }

    fetchData();

    return (
        <div className='flex'>
            {arr.map((x, index) => {
                return <div key={index}></div>
            })}
        </div>
    )
}

export default Loading
