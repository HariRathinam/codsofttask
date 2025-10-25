import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>JobBoard</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/employer">Employer</Link></li>
        <li><Link to="/candidate">Candidate</Link></li>
      </ul>
    </nav>
  );
}
