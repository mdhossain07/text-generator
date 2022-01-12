import React, { useState } from 'react';
import data from './data';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
  
    if (count <= 0){
      amount = 1;
    }

    if (count > 8){
      amount = 8;
    }

    setText(data.slice(0, amount));
  }
  
  return (
    <main>
      <h2 className='title'> Tired Of Boring Lorem Ipsum? </h2>

      <form onSubmit={handleSubmit}>

      <label htmlFor="amount">
        Paragraphs: 
      </label>

      <input type="number" name="amount" id="amount" 
      value = {count} 
      onChange={(e) => setCount(e.target.value)}/>

      <button type='submit'> Generate </button>
      </form>

      <article className='content'>
        {
          text.map((item,index) => 
          <p style={{marginBottom : '25px', color: '#667D98', fontSize: '14px', letterSpacing : '1px', lineHeight: '22px'}}
          key = {index}> 
          {item} </p>)
        }
      </article>
    </main>
  );
}

export default App;
