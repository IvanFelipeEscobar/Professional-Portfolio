

const Form = () => { //create state variables && set initial val to empty string
    // const [email, setEmail] = useState(``)
    // const [name, setName] = useState(``)
    // const [message, setMessage] = useState(``)

    // const handleChange = (e) => {
        
    //     const { name: inputType, value: inputValue} = e.target

    //    if (inputType===`email`){
    //     setEmail(inputValue)
    //    } else if(inputType===`name`) {
    //     setName(inputValue)
    //    } else {
    //     setMessage(inputValue)
    //    }

    // }
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     if(!validateEmail(email)) {
    //         alert(`not a valid Email !!!`)
    //     }
    //     if (!name || !email || !message ) {
    //         alert('Please enter all Fields')
    //     }
    //     if (validateEmail(email) && name && email && message) {
    //    setEmail(``)
    //    setMessage(``)
    //    setName(``) 
    // }

       
    // }

    return (
        <form className="form"  action="https://formsubmit.co/your@email.com" method="POST">
            <label for="name">Name: </label>
            <input
                // value={name}
                name="name"
                id="name"
                // onChange={handleChange}
                type="text"
                placeholder="name"
                required
            /> <br/>
            <label for="title">Professional Title: </label>
            <input
                // value={name}
                name="title"
                id="title"
                // onChange={handleChange}
                type="text"
                placeholder="professional title"
            /> <br/>
            <label for="email">Contact E-Mail: </label>
            <input
                // value={email}
                name="email"
                id="email"
                // onChange={handleChange}
                type="email"
                placeholder="email"
                required
            /><br/>
            <label for="message">Comments, Question and/or Concerns: </label>
            <input
                // value={message}
                name="message"
                id="message"
                // onChange={handleChange}
                type="textarea"
                placeholder="message"
            /><br/>
            <button type="submit" 
            // onClick={handleSubmit}
            >Submit</button>
       
        </form>
    )
}

export default Form