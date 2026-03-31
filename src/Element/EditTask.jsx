import React, { useState, useEffect } from "react";
import { useTodo } from "../Context/TodoContext";

export const EditTask = ({todo, onClose}) => {

    const { editTodo} = useTodo();

    const [newTask, setNewTask] = useState("");
    const [newDeadline, setNewDeadline] = useState("")
    const [message, setMessage] = useState("");
    const [validate, setValidate] = useState(false);

    useEffect(() => {
        if (todo) {
            setNewTask(todo.text);
            setNewDeadline(todo.deadline);
        }
    }, [todo, setNewTask, setNewDeadline])

    const handleEditTodo = (e) => {
        e.preventDefault();
        if (!newTask) {
            setMessage("Enter Your Task");
            setValidate(false);
            return;
        } else if (!newDeadline) {
            setMessage("Enter Deadline");
            setValidate(false);
            return;
        } else {
            setMessage("Task Edited");
            setValidate(true);
        }
        editTodo(todo.id, newTask, newDeadline);;
    }

    const handleCancel = () => {
        setNewTask("");
        setNewDeadline("");
        onClose();
    }

    return (
        <div className="fixed top-0 left-0 bg-black/50 z-[100] w-screen h-screen flex items-center justify-center">
            <div className="bg-white w-[80%] max-w-[600px] flex flex-col justify-center items-center px-5 py-3 gap-3 rounded-xl">
                <h1 className="font-bold text-3xl">Edit Task</h1>
                <form onSubmit={handleEditTodo} className="flex flex-col w-full gap-3">
                    <input 
                        type="text" 
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        placeholder="Enter Your Task..."
                        className="bg-gray-200 py-2 px-4 rounded-sm focus:outline-none"
                        autoFocus
                        />
                    <input 
                        type="datetime-local"
                        value={newDeadline}
                        onChange={(e) => setNewDeadline(e.target.value)}
                        className="bg-gray-200 py-2 px-4 rounded-sm focus:outline-none"
                    />
                    <div className="flex justify-between">
                        <p className="text-sm">Last Edited at: {new Date(todo.lastEditedAt).toLocaleString("id-ID")}</p>
                        <p className={`text-sm m-0 p-0 ${validate ? "text-green-600" : "text-red-600"}`}>{message}</p>
                    </div>
                    <div className="w-full flex justify-end gap-2 flex-wrap">
                        <button 
                            className="bg-green-600 text-white font-bold px-4 py-2 rounded-sm cursor-pointer hover:bg-green-700"
                            type="submit"
                            >
                            Done
                        </button>
                        <button 
                            className="bg-red-600 text-white font-bold px-4 py-2 rounded-sm cursor-pointer hover:bg-red-700"
                            onClick={handleCancel}
                            >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}