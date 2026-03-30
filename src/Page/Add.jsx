import { useState } from "react";
import { useTodo } from "../Context/TodoContext";

export const Add = () => {

    const { todos, setTodos, addTodo, } = useTodo();
    const [task, setTask] = useState("");
    const [deadline, setDeadline] = useState("")
    const [message, setMessage] = useState("");
    const [validate, setValidate] = useState(false);

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (!task) {
            setMessage("Enter Your Task");
            setValidate(false);
            return;
        } else if (!deadline) {
            setMessage("Enter Deadline");
            setValidate(false);
            return;
        } else {
            setMessage("Task Added");
            setValidate(true);
        }
        addTodo(task, deadline);
        setTask('');
        setDeadline('');
    }

    return (
        <>
            <h1 className="text-3xl font-bold mb-5">Add Task</h1>
            <form onSubmit={handleAddTodo} className="flex flex-col gap-3 max-w-[600px]">
                <input 
                    type="text" 
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Enter Your Task..."
                    className="bg-gray-200 py-2 px-4 rounded-sm focus:outline-none"
                    autoFocus
                    />
                <input 
                    type="datetime-local"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    className="bg-gray-200 py-2 px-4 rounded-sm focus:outline-none"
                />
                <p className={`text-sm m-0 p-0 ${validate ? "text-green-600" : "text-red-600"}`}>{message}</p>
                <button 
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded-sm cursor-pointer hover:bg-blue-700"
                    type="submit"
                >
                    Add
                </button>
            </form>
        </>
    )
}