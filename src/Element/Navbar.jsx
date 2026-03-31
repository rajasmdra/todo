import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../App.css'

export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    
    const toggleHamburger = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="flex items-center px-[5%] py-2 bg-orange-700 text-white font-bold text-lg flex-row justify-between flex-wrap fixed w-full">
            <p className="text-2xl">Tugasku</p>
            <button 
                className="text-3xl cursor-pointer sm:hidden"
                onClick={toggleHamburger}
                >
                =
            </button>
            <div className={`flex flex-col w-full font-semibold gap-2 py-3 justify-end
                sm:flex-row sm:w-auto sm:flex-1 sm:py-1 sm:gap-[10%]
                *:hover:text-gray-300
                ${isOpen ? "max-sm:flex" : "max-sm:hidden"}`}
                >
                {!isOpen && <br />}
                <Link onClick={toggleHamburger} to="/">Home</Link> 
                <Link onClick={toggleHamburger} to="/add">Add</Link> 
                <Link onClick={toggleHamburger} to="/active">Active</Link>
                <Link onClick={toggleHamburger} to="/complete">Complete</Link>
            </div>
        </nav>
    )
}