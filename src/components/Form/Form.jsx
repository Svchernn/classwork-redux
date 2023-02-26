import { useState } from "react";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "redux/users/usersSlice";



export const Form = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState("");

    
    const dispatch = useDispatch();

    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value; 

        name === "name" ? setName(value) : setAge(value);
    }

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            id: nanoid(),
            name,
            age,
            status: "offline",
        }
        dispatch(addUser(newUser));
        navigate("/");

    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:
            <input onChange={handleChange} type="text" name="userName"/>
            </label>
            <label>Age:
            <input onChange={handleChange} type="text" name="age"/>
            </label>
            <button type="submit">Save</button>
        </form>
    )
}