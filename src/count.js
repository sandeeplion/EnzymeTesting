import React, { useImperativeHandle, useState } from 'react';

function Count(){

    const [count,setCount]=useState(0);

    function handleClick(){
        return (
        setCount(count+1)
        )
    }


    return <div>
        <h1>Welcome to testing page</h1>
        <h4 data-test="counter-display">The count is <span data-test="count">{count}</span></h4>
        <h6>Welcome</h6>
        <p>Hello testing</p>
        <button data-test="increment-button"  onClick={handleClick} >Click to Increment</button>

    </div>
}

export default Count;