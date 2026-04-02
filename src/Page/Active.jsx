import React, { useMemo, useState } from "react";
import { TaskCard } from "../Element/TaskCard";
import { useTodo } from "../Context/TodoContext";
import { EditTask } from "../Element/EditTask";

export const Active = () => {

    const { todos, deleteTodo, completeTodo } = useTodo();
    const activeTodos = todos.filter(todo => !todo.isCompleted);
    const [editingTodo, setEditingTodo] = useState(null);
    const [searchInput, setSearchInput] = useState("")

    const [sortBy, setSortBy] = useState("");
    const [orderBy, setOrderBy] = useState("");

    const handleOrder = () => {
        setOrderBy(!orderBy);
    }

    const sortedTodos = useMemo(() => {
        if (orderBy === "descending") {
            return [...activeTodos].sort((a, b) => {
                if (sortBy === "text") return b[sortBy].localeCompare(a[sortBy]);
                else  return new Date(b[sortBy]) - new Date(b[sortBy]);
            });
        } else {
            return [...activeTodos].sort((a, b) => {
                if (sortBy === "text") return a[sortBy].localeCompare(a[sortBy]);
                else  return new Date(a[sortBy]) - new Date(b[sortBy]);
            });
        }
    }, [activeTodos, sortBy]);

    const filteredTodos = sortedTodos.filter((todo) =>
        todo.text.toLowerCase().startsWith(searchInput.toLowerCase())
    );

    
    return (
        <div className="h-full flex flex-col">
            <div className="flex justify-between items-center flex-wrap">
                <h1 className="text-3xl font-bold">Active Task</h1>
                <div className="flex flex-row flex-wrap gap-3 py-2 
                    *:rounded-sm *:bg-gray-200 *:p-1 *:focus:outline-none *:cursor-pointer *:hover:bg-gray-300">
                    <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                        <option value="" disabled>Sort By</option>
                        <option value="text">Name</option>
                        <option value="createdAt">Created At</option>
                        <option value="deadline">Deadline</option>
                        <option value="lastEditedAt">Last Edited</option>
                    </select>
                    <button 
                        onClick={handleOrder}
                        className="*:px-2"
                    >
                        {orderBy ? <span>&uarr;</span> : <span>&darr;</span>}
                    </button>
                    <input 
                        type="search" 
                        value={searchInput}
                        placeholder="Search"
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                </div>
            </div>
            <p>Your Active Task: {activeTodos.length}</p>
            {activeTodos.length === 0 ? (
                <div className="flex justify-center items-center flex-col flex-1 text-center gap-2">
                    <p className="font-bold text-4xl">There's No Task Here</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, esse.</p>
                </div>
            ) : (
                <ul>
                    {filteredTodos.map((todo) => (
                        <li key={todo.id}>
                            <TaskCard 
                                todo={todo} 
                                onComplete={completeTodo}
                                onDelete={deleteTodo}
                                onEdit={setEditingTodo}
                            />
                        </li>
                    ))}
                </ul>
            )}
            {filteredTodos.length === 0 && searchInput.trim() !== "" && (
                <div className="flex justify-center items-center flex-col flex-1 text-center gap-3">
                    <p className="font-bold text-4xl">Not a Single Task Found</p>
                    <p>Sorry, we couldn't find a match. Try checking your spelling.</p>
                </div>
            )}
            {editingTodo && (
                <EditTask 
                    todo={editingTodo}
                    onClose={() => setEditingTodo(null)}
                />
            )}
        </div>
    )
}