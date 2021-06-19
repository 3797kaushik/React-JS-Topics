import React, { useState } from 'react'

const MultipleEvent = () => {
    
    const onSubmits =(event)=>{
        event.preventDefault();
    }

    const [fullName , setFullName ] = useState({
        fname:"",
        email:"",
        lname:""
    });

    const inputEvent =(event)=>{
        const {name, value} = event.target
        setFullName((prevState)=>{
            // console.log(prevState);
            return {...prevState , 
                [name]: value  } ;//{fname :  event.target.value , email:"",lname:''};
        });
    }

    return (<>
        <div style={{ backgroundColor: 'green' }}>
            <form onSubmit={onSubmits}>
                <div>
                    <br />
                    <h1> Hi {fullName.fname}</h1>
                    <input
                        type='text'
                        placeholder='Enter your name'
                        onChange={inputEvent}
                        value={fullName.fname}
                        name= 'fname'
                    />

                    <p> {fullName.email}</p>
                    <input
                        type='text'
                        placeholder='Enter your name'
                        onChange={inputEvent}
                        value={fullName.email}
                        name='email'
                    />
                    <h1>  {fullName.lname}</h1>
                    <input
                        type='text'
                        placeholder='Enter your name'
                        onChange={inputEvent}
                        value={fullName.lname}
                        name= 'lname'
                    />

                    <br />
                    <button type='submit'> Submit Me </button>
                </div>
            </form>
        </div>
    </>)
}

export default MultipleEvent;