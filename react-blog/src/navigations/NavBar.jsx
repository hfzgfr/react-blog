import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>The Blog Site</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">Create New Blog</a>
      </div>
    </nav>
  )
}

export default NavBar;