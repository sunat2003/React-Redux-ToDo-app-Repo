import { AddTodo } from "../addTodo/addTodo";
import "./Todo.css";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../../features/todo/todoSlice";

export function Todo(){
    const todos=useSelector(state=>state.todos)
    const dispatch=useDispatch();

    return(
        <div className="todo-div">
            <h3 className="text-center">Learning Redux</h3>
            <h2 className="text-success">Todos</h2>
            <AddTodo/>
           <ul className="list-unstyled">
           {
                todos.map(todo=>
                    (todo.id===1)?<p></p>:<li key={todo.id}>{todo.text} <button className="bi bi-trash btn btn-danger" onClick={()=>dispatch(removeTodo(todo.id))}></button></li>
                )
            }
           </ul>
        </div>
    )
}