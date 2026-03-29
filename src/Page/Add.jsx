import React, { useState, useEffect } from "react";
import { useTodo } from "../TodoContext";

export const Add = () => {

    const { todos, setTodos } = useTodo();
    const [task, setTask] = useState("");
    const [deadline, setDeadline] = useState("")
    const [message, SetMessage] = useState("");

    const addTodo = (e) => {
        e.preventDefault();
        if (!task) {
            SetMessage("Enter Your Task");
            return;
        } else if (!deadline) {
            SetMessage("Enter Deadline");
            return;
        } else {
            SetMessage("Task Added");
        }
        
        const newTodo = {
            id: Date.now(), 
            text: task,
            isCompleted: false,
            createdAt: new Date().toLocaleString("id-ID"),
            deadline: new Date(deadline).toLocaleString("id-ID"),
            completedAt: null
        }
        setTodos([...todos, newTodo]);
        setTask('');
        setDeadline('');
    }

    return (
        <>
            <h1 className="text-3xl font-bold mb-5">Add Task</h1>
            <form onSubmit={addTodo} className="flex flex-col gap-3 max-w-[600px]">
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
                <p className="text-sm text-red-600 m-0 p-0">{message}</p>
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