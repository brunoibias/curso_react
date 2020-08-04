import React from 'react';

const TodoList = ({lists}) => {
    return (
        <ul >
            {lists.map((list, index) => {
                return <li key={index}>{list}</li>
            })}
        </ul>
    );
}

export default TodoList;