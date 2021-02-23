import React, { useState } from 'react';
import TodoList from './TodoList';

const Todo = () => {
    const [state, setState] = useState('');
    const [store, setStore] = useState([]);

    const handleChange = (e) => {
        setState(e.target.value)
    }
    const handleClick = () => {
        setStore((prevValue) => {
            return [...prevValue, state]
        });
        setState('')
    }


    return (
        <div className="main_div">
            <div className="centerDiv">
                <div className="title">
                    <h1>Your Todo <span>{store.length}</span></h1>
                </div>
                <div className="item_box">
                    <input type="text" value={state} onChange={handleChange} placeholder="Add Items" />
                    <div className="icon" onClick={handleClick}>+</div>
                </div>
                <div className="todo_items">
                    <ol>
                        {
                            store.map((value, index) => {
                                return <TodoList key={index} item={value} />
                            })
                        }
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Todo;