import React, { useState } from 'react'
import MultipleEvent from './MultipleEvent'
const Events = () => {

    const [name, setName] = useState("Start 🐺");
    const [color, setColor] = useState("purple");
    const [inputName, setInput] = useState();

    const setSingle = () => {
        setName("Fire 🔥");
        setColor('yellow');
    }
    const setDouble = () => {
        setName("🌊 Water Wave");
        setColor('blue');
    }
    const inputEvent = (event) => {
        setInput(event.target.value);
    }
    const onSubmits =(event)=>{
        event.preventDefault();
    }
    return (<>
        <div style={{ backgroundColor: color }}>
            <form onSubmit={onSubmits}>
                <div>
                    <button onClick={setSingle} onDoubleClick={setDouble}>{name}
                    </button>

                    <br />
                    <h1> Hi {inputName}</h1>
                    <input
                        type='text'
                        placeholder='Enter your name'
                        onChange={inputEvent}
                        value={inputName}
                    />

                    <br />
                    <button type='submit'> Submit Me </button>
                </div>
            </form>
        </div>
        <MultipleEvent />
    </>)
}
export default Events;