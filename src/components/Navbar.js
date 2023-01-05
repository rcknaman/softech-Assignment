import {
  Link
} from "react-router-dom";
import React from 'react'

const Navbar = () => {



  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">SoftTech News</Link>
      </div>
    </nav>
  )
}

export default Navbar