import React, { useState, useEffect } from "react";
import { TaskCard } from "../Element/TaskCard";
import { useTodo } from "../TodoContext";

export const Active = () => {

    const { todos, deleteTodo, completeTodo, activeTodos } = useTodo()

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
                            />
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}