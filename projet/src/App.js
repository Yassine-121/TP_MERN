import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/navbar.component';
import UsersList from './components/user-list.component';
import EditUser from './components/edit-user.component';
import CreateUser from './components/create-user.component';
//import RemoveUser from './components/remove-user.component';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/> 
        <br/>
        <Route path="/users" render={()=> <CreateUser />} exact/>
        <Route path="/edit/:id"  component={EditUser}/>
        <Route path="/AllUsers"  render={()=> <UsersList />}/>
      </div>
    </Router>
  );
}

export default App;
