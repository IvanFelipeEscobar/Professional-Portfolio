import React, {useState} from "react";
import { validateEmail } from "../utils/helpers";

const Form = () => { //create state variables && set initial val to empty string
    const [email, setEmail] = useState(``)
    const [name, setName] = useState(``)
    const [message, setMessage] = useState(``)

    const handleChange = (e) => {
        
        const { name: inputType, value: inputValue} = e.target

       if (inputType===`email`){
        setEmail(inputValue)
       } else if(inputType===`name`) {
        setName(inputValue)
       } else {
        setMessage(inputValue)
       }

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!validateEmail(email)) {
            alert(`not a valid Email !!!`)
        }
        if (!name || !email || !message ) {
            alert('Please enter all Fields')
        }
        if (validateEmail(email) && name && email && message) {
        alert(`Thanks for Submitting! currently this from is just for show so I encourage you to use the links at the bottom if you would like to contact me`)
       setEmail(``)
       setMessage(``)
       setName(``) 
    }

       
    }

    return (
        <form action="mailto:ivnescbr1989@gmail.com" method="get" className="form">
            <input
                value={name}
                name="name"
                onChange={handleChange}
                type="text"
                placeholder="name"
            /> <br/>
            <input
                value={email}
                name="email"
                onChange={handleChange}
                type="email"
                placeholder="email"
            /><br/>
            <input
                value={message}
                name="message"
                onChange={handleChange}
                type="text"
                placeholder="message"
            /><br/>
            <button type="button" onClick={handleSubmit}>Submit</button>
       
        </form>
    )
}

export default Form