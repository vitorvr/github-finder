import React from 'react';

const Navbar = ({ title = 'Github Finder', icon = 'fab fa-github'}) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
    </nav>
  );
};

export default Navbar;
