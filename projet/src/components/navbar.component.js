import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/AllUsers" className="navbar-brand">YassineAMG</Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
            <Link to="/AllUsers" className="nav-link">Utilisateurs</Link>
            </li>
            <li className="navbar-item">
            <Link to="/users" className="nav-link">Nouveau utilisateur</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}