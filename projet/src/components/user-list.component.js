import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const User = props => (
  <tr>
    <td>{props.user.username}</td>
    <td>{props.user.gender}</td>
    <td>{props.user.dob.substring(0,10)}</td>
    <td>{props.user.email}</td>
    <td><img src='./public/saylor.jpeg' alt=""/></td>
    <td>
      <Link to={"/edit/"+props.user._id}><i className="material-icons">sync</i></Link>  <i className="material-icons" onClick={() => { props.deleteUser(props.user._id) }}>delete</i>
    </td>
  </tr>
)

export default class UsersList extends Component {
	constructor(props) {
	  super(props);
	  this.state = {users: []};
	  this.deleteUser = this.deleteUser.bind(this);
	}

	componentDidMount() {
	  axios.get('http://localhost:5000/')
	   	   .then(response => {
	     		this.setState({ users: response.data });
	   		})
	       .catch((error) => {
	      		console.log(error);
	   		})
	}

	deleteUser(id) {
	  axios.delete('http://localhost:5000/users/'+id)
	       .then(res => console.log(res.data));
	  this.setState({
	    users: this.state.users.filter(el => el._id !== id)
	  })
	}

	userList() {
	    return this.state.users.map(currentuser => {
	      return <User user={currentuser} deleteUser={this.deleteUser} key={currentuser._id}/>;
	    })
	}

	render() {
	    return (
			<div>
			  <h3>Liste des utilisateurs</h3>
			  <table className="table table-striped" id="table_id">
			    <thead className="thead-light">
			      <tr>
			        <th>Username</th>
			        <th>Gender</th>
			        <th>dob</th>
			        <th>Email</th>
			        <th>photo</th>
			        <th>Action</th>
			      </tr>
			    </thead>
			    <tbody>
			      { this.userList() }
			    </tbody>
			  </table>
			</div>
	    )
	}
}