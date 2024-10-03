import React, { useState } from 'react'

function State() {
    var isDone = false;
    // var isDone = true;
    const strikeThrough = {textDecoration: "line-through"};

    const [count, setCount] = useState(0);
    // const increase = ((x) =>{
    //     setCount(x + 1);
        
    // })
    function increase(){
        setCount(count + 1);
    }
    function decrease(){
        setCount(count - 1);
    }

  return (
    <div >
        <p style={isDone ? strikeThrough : null}>Buy Milk</p>
        <h1>{count}</h1>
        <button type='button' onClick={increase}>+</button>
        <button type='button' onClick={decrease}>-</button>
    </div>
  )
}

export default State;