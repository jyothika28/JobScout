import React from 'react';
import './header.css';
//import JobScout from '../images/JobScout-logo.png';

function Header() {
  return (
    <header className="header">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <a className="navbar-brand" href="/">
  JobScout
</a>
<span class="navbar-text">
        Login
      </span>
  </div>
</nav>
    </header>
  );
}

export default Header;