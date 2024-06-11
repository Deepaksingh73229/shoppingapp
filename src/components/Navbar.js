import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../images/logo.png'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

export function Navbar() {
    const { ShoppingApp } = useSelector((state) => state)

    return (
        <div className="w-screen bg-slate-900 mb-10">
            <div className="w-full max-w-[400px] md:max-w-[1080px] mx-auto flex justify-between items-center px-3 md:px-0 py-5">
                <NavLink to="/shoppingapp">
                    <img src={logo} alt="logo" href="/" width={150} className=""></img>
                </NavLink>

                <div className="flex items-center gap-10 text-white">
                    <NavLink to="/shoppingapp">
                        <span className=" hover:text-green-400 transition-all duration-200">Home</span>
                    </NavLink>

                    <NavLink to='/cart'>
                        <div className="relative">
                            <FaShoppingCart className="scale-150 hover:text-green-400 transition-all duration-200" />

                            {ShoppingApp.length > 0 &&
                                <span className="kart flex justify-center items-center w-5 h-5 absolute -top-[0.8rem] left-[0.65rem] text-white font-mono text-xs bg-green-600 rounded-full p-[0.5rem] ">{ShoppingApp.length}</span>
                            }
                        </div>

                    </NavLink>


                </div>
            </div>
        </div>
    )
}