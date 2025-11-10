import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user, handleLogout }) => {
    return (
        <div className="navbar bg-base-100 shadow-lg px-4">
            {/* Logo */}
            <div className="flex-1">
                <Link to="/" className="text-xl font-bold">CleanCity</Link>
            </div>

            {/* Menu Items */}
            <div className="flex-none gap-2">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/all-issues">All Issues</Link></li>

                    {user ? (
                        <>
                            <li><Link to="/add-issue">Add Issue</Link></li>
                            <li><Link to="/my-issues">My Issues</Link></li>
                            <li><Link to="/my-contribution">My Contribution</Link></li>

                            {/* Profile Avatar Dropdown */}
                            <li className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} alt="User" />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <button onClick={handleLogout} className="w-full text-left">Logout</button>
                                    </li>
                                </ul>
                            </li>
                        </>
                    ) : (
                        <>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
