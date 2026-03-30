import React, { useState, useEffect } from "react";
import { TaskCard } from "../Element/TaskCard";
import { useTodo } from "../Context/TodoContext";
import { EditTask } from "../Element/EditTask";

export const Active = () => {

    const { editTodo, deleteTodo, completeTodo, activeTodos } = useTodo();
    const [editingTodo, setEditingTodo] = useState(null);

    return (
        <>
            <h1 className="text-3xl font-bold">Active Task</h1>
            <p>Your Active Task: {activeTodos.length}</p>
            {activeTodos.length === 0 ? (
                <p>No Task Here</p>
            ) : (
                <ul>
                    {activeTodos.map((todo) => (
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
        </>
    )
}