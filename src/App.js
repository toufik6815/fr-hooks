import React, { useState } from 'react';
import './App.css';

function App() {
  // ============================= All state
  const [addClass, setAddClass] = useState('item')
  const [state, setState] = useState([]);

  // ============================= AddItem Function
  const addItem = () => {
    if (state.length < 5) {
      const item = { id: new Date().getTime().toString(), addClass };
      setState([...state, item]);
      setAddClass('item')
    }else{
      alert('Hei Your Item is already added In a 5 levels')
    }
  }

  // ============================= ALL Item Remove Function
  const removeItem = () => {
    setState([]);
    setAddClass('item')
  }



  return (
    <div className='App'>
      <div className="box">
      {/*  ============================= AddItem Button */}
        <div>
          <button onClick={() => addItem()}>Add Item</button>
        </div>

        <div>  {/*  ============================= Class Add Section */}
          {
            state.map((item, index) => {
              return (
                <div className="registration_form_data" key={item.id}>
                  <div className={item.addClass}></div>
                </div>
              )
            })
          }
        </div>
        
         {/*  ============================= Remove All Class */}
        <div>
          <button onClick={() => removeItem()}>Remove</button>
        </div>
      </div>
    </div>
  );
}

export default App;
