import React, {useState} from "react";

// below instead of props, its a destructured prop, specicifically the function from app.js
const Form = ({addTask}) => {
    const [userInput, setUserInput] = useState("");

    const handleChange = (e) => {
        setUserInput(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={userInput} onChange={handleChange}/>
            <button>Add</button>
        </form>
    );
};

export default Form;