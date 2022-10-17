import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "../redux/actions";
import { v4 as uuid } from "uuid";

export const TodoApp = () => {
    const [form, setForm] = useState("");
    const todos = useSelector(state => state.initTodo);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setForm(e.target.value);
    }

    const handleClick = (e) => {
        dispatch(addTodo({
            id: uuid(),
            text: form
        }))
    }

    const handleDelete = (index) => {
        dispatch(removeTodo(index))
    }
    
    console.log(todos);
    return (
        <div className="container pt-3">
            <h2>Todo list</h2>
            <div className="row">
                <div className="col-12 col-md-6 d-flex">
                    <input type="text" className="form-control" placeholder="Enter a new task" name="todo" value={form || ''} onChange={handleChange}></input>
                    <button onClick={handleClick} className="btn btn-success mx-3">Add</button>
                </div>
                <div className="col-12 col-md-6"></div>
            </div>

            <hr />
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map((task) => (
                            <tr key={task.id}>
                                <td>{task.text}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => handleDelete(task.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}