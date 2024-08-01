import React, { useState } from 'react';

const Message = () => {
    const [msg, setMsg] = useState("Hello");

    const GmHandler = () => {
        setMsg("Good Morning");
    }

    const GaHandler = () => {
        setMsg("Good Afternoon");
    }

    const GeHandler = () => {
        setMsg("Good Evening");
    }

    const GnHandler = () => {
        setMsg("Good Night");
    }

    return (
        <div>
            <pre>{JSON.stringify({ msg })}</pre>
            <hr />
            <h2>The Message is: {msg}</h2>
            <button onClick={GmHandler}>Gm</button>
            <button onClick={GaHandler}>Ga</button>
            <button onClick={GeHandler}>Ge</button>
            <button onClick={GnHandler}>Gn</button>
        </div>
    );
}

export default Message;
