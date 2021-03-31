import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">YassineAMG</Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
            <Link to="/" className="nav-link"><i className="material-icons">account_circle</i>Utilisateurs</Link>
            </li>
            <li className="navbar-item">
            <Link to="/users" className="nav-link"><i className="material-icons">add_circle_outline</i>Nouvel utilisateur</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}