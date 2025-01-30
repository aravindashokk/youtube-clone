import React from 'react';
import Comment from './Comment';

const commentsData = [
    {
        name: 'User1',
        text: 'Lorem ipsum ',
        replies: [{
            name: 'User4',
            text: 'Lorem ipsum '
        },
        {
            name: 'User9',
            text: 'Lorem ipsum'
        },

        ]
    },
    {
        name: 'User2',
        text: 'Lorem ipsum  ',
        replies: [{
            name: 'User4',
            text: 'Lorem ipsum '
        },
        {
            name: 'User9',
            text: 'Lorem ipsum'
        },

        ]
    },
   


];

export const CommentsList = ({ comments }) => {
    return comments.map((comment) => (
        <div key={comment.name}> 
            <Comment data={comment} />
            <div className='pl-5 border border-l-black ml-5'>
                {comment.replies && (
                    <CommentsList comments={comment.replies} />
                )}
            </div>
        </div>
    ));
};



const CommentsContainer = () => {
    return (
        <div className='m-5 p-2'>
            <h1 className='text-2xl font-bold '>Comments :</h1>
            <CommentsList comments={commentsData} />
        </div>
    )
}

export default CommentsContainer;