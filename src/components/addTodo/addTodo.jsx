import { useState } from "react";
import "./addTodo.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todo/todoSlice";

export function AddTodo() {
    const [input, setinput] = useState("");
    const dispatch = useDispatch();
    function addTodoHandler(e) {
        e.preventDefault();
        if (input !== "") {
            dispatch(addTodo(input))
            setinput("");
        }
    }
    function handleChange(e) {
        setinput(e.target.value);
    }


    return (
        <div>
            <form className="d-flex align-items-center cus-form" onSubmit={addTodoHandler}>
                <input type="text" placeholder="Enter your text" onChange={handleChange} value={input} />
                <button className="todo-btn">Add task</button>
            </form>
        </div>
    )
}