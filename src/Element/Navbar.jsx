import React from "react";
import { Link } from "react-router-dom";
import '../App.css'

export const Navbar = () => {
    return (
        <nav className="flex justify-evenly py-2 bg-orange-700 text-white font-bold text-lg">
            <br />
            <Link to="/">Home</Link> 
            <Link to="/add">Add</Link> 
            <Link to="/active">Active</Link>
            <Link to="/complete">Complete</Link>
            <br />
        </nav>
    )
}