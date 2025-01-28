import React from 'react';
import Comment from './Comment';

const commentsData = [
    {
        name: 'User1',
        text: 'Lorem ipsum ',
        replies: [{
            name: 'User2',
            text: 'Lorem ipsum '
        },
        {
            name: 'User3',
            text: 'Lorem ipsum'
        },

        ]
    },
    {
        name: 'User2',
        text: 'Lorem ipsum  '
    },
    {
        name: 'User3',
        text: 'Lorem ipsum  '
    },


];

const CommentsList = ({ comments }) => {
    return comments.map((comment, index) => (
        <div>
            <Comment key={index} data={comment} />
            <div className='pl-5 border border-l-black ml-5'>
                <Comment key={index} data={comment} />
                <Comment key={index} data={comment} />
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