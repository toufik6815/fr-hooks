import React, { useState } from 'react';

const TodoList = ({ item }) => {
    const [cross, setCross] = useState(false);

    const handleCross = () => {
        setCross(true)
    }
    return (

        <div className="value_box">
            <div className="value_cross" onClick={handleCross}>x</div>
            <li style={{ textDecoration: cross ? 'line-through' : 'none' }}>{item}</li>
        </div>
    );
};

export default TodoList;