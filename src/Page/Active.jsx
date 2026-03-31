import React, { useMemo, useState } from "react";
import { TaskCard } from "../Element/TaskCard";
import { useTodo } from "../Context/TodoContext";
import { EditTask } from "../Element/EditTask";

export const Active = () => {

    const { todos, deleteTodo, completeTodo } = useTodo();
    const activeTodos = todos.filter(todo => !todo.isCompleted);
    const [editingTodo, setEditingTodo] = useState(null);

    const [sortBy, setSortBy] = useState("");
    const [orderBy, setOrderBy] = useState("");
    const sortedTodos = useMemo(() => {
        if (orderBy === "descending") {
            return [...activeTodos].sort((a, b) => {
                return new Date(b[sortBy]) - new Date(a[sortBy]);
            });
        } else {
            return [...activeTodos].sort((a, b) => {
                return new Date(a[sortBy]) - new Date(b[sortBy]);
            });
        }
    }, [activeTodos, sortBy]);
    
    return (
        <div className="h-full flex flex-col">
            <div className="flex justify-between items-center flex-wrap">
                <h1 className="text-3xl font-bold">Active Task</h1>
                <div className="flex flex-row flex-wrap gap-3 py-2 
                    *:rounded-sm *:bg-gray-200 *:p-1 *:focus:outline-none *:cursor-pointer *:hover:bg-gray-300">
                    <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                        <option value="" disabled>Sort By</option>
                        <option value="createdAt">Created At</option>
                        <option value="deadline">Deadline</option>
                        <option value="lastEditedAt">Last Edited</option>
                    </select>
                    <select value={orderBy} onChange={(e => setOrderBy(e.target.value))}>
                        <option value="" disabled>Order By</option>
                        <option value="ascending">Ascending (A-Z)</option>
                        <option value="descending">Descending (Z-A)</option>
                    </select>
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
                    {sortedTodos.map((todo) => (
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
            {editingTodo && (
                <EditTask 
                    todo={editingTodo}
                    onClose={() => setEditingTodo(null)}
                />
            )}
        </div>
    )
}