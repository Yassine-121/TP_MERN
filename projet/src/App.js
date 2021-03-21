import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/navbar.component';
import UserList from './components/user-list.component';
import EditUser from './components/edit-user.component';
import CreateUser from './components/create-user.component';
import RemoveUser from './components/remove-user.component';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/> 
        <Route path="/users" component={CreateUser}/>
        <Route path="/AllUsers" exact component={UserList}/>
        <Route path="/users/:id" component={EditUser}/>
        <Route path="/users/:id" component={RemoveUser}/>


      </div>
    </Router>
  );
}

export default App;
