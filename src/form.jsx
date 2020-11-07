import React, { useState } from 'react';

const App = () => {
    const [bioData,setBioData] = useState({
        fname : "",
        lname : "",
    });
    
    const inputBioData = (event) => {
        const {name,value} = event.target
        
        setBioData((preValue)=>{
            return{...preValue,
            [name]:value,}
        })
            // if (name === "fname") {
            //     return{
            //         fname : value,
            //         lname : preValue.lname,
            //     }
            // }else if (name === "lname") {
            //     return{
            //         fname : preValue.fname,
            //         lname : value,
            //     }
            // }
        
    }

    const submit = (event) => {
        event.preventDefault();
    }
     return (
        <>
        <form onSubmit={submit}>
        <h2>My FullName Is : {bioData.fname} {bioData.lname} </h2>
        <input type='text' placeholder='Enter Your FirstName'
        onChange={inputBioData} 
        name="fname" value={bioData.fname}/>
        <br />
        <input type='text' placeholder='Enter Your LastName'
        onChange={inputBioData} 
        name="lname" value={bioData.lname}/>
        <br />
        <br />
        <button type='submit'>Submit</button>
        </form>
        </>
    )
}

export default App;