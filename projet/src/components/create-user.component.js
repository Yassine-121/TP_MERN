import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class CreateUser extends Component {
	constructor(props){
		super(props);

		this.onChangeUsername = this.onChangeUsername.bind(this);
		this.onChangeGender = this.onChangeGender.bind(this);
		this.onChangeDob = this.onChangeDob.bind(this);
		this.onChangeEmail = this.onChangeEmail.bind(this);
		this.onChangePhoto = this.onChangePhoto.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			username: '',
			gender: 'male',
			dob: new Date(),
			email: '',
			photo: ''
		}
	}

//Method to update the state properties
	onChangeUsername(e){
		this.setState({
			username: e.target.value
		});
	}

	onChangeGender(e){
		this.setState({
			gender: e.target.value
		});
	}

	onChangeDob(dob){
		this.setState({
			dob: dob
		});
	}

	onChangeEmail(e){
		this.setState({
			email: e.target.value
		});
	}

	onChangePhoto(e){
		this.setState({
			photo: e.target.files[0]
		});
	}

//Method to handle the submit event

	onSubmit(e){
		console.log('yes');
		e.preventDefault();

		const user = {
			username: this.state.username,
			gender: this.state.gender,
			dob: this.state.dob,
			email: this.state.email,
			photo: this.state.photo,
		};

		console.log(user);
		console.log(user.photo.name)
		axios.post('http://localhost:5000/users', user)
  			 .then(res => console.log(res.data))
  			 .catch(err => console.log(err));

		//window.location = '/AllUsers';
	}

  render() {
    return (
    	<div>
		    <h5>Nouveau Utilisateur</h5>
		    <form onSubmit={this.onSubmit} encType="multipart/form-data">

		      	<div className="form-group">
		      		<label htmlFor="">Username: </label>
		      		<input type="text"
		      			   className="form-control"
		      			   value={this.state.username}
		      			   onChange={this.onChangeUsername}/>
		      	</div>

		      	<div className="form-group">
    				<label htmlFor="">Gender: </label>
    				<select value={this.state.gender} onChange={this.onChangeGender}>
    					<option value="Male">Male</option>
    					<option value="Female">Female</option>
    				</select>
		      	</div>

		      	<div className="form-group">
		      		<label htmlFor="">date: </label>
		      		<div>
 						<DatePicker
 							selected={this.state.dob}
 							onChange={this.onChangeDob}
 						/>
		      		</div>
		      	</div>

		      	<div className="form-group">
    				<label htmlFor="">News: </label>
    				<select value={this.state.news} onChange={this.onChangeNews}>
    					<option value="1">Yes</option>
    					<option value="0">No</option>
    				</select>
		      	</div>

		      	<div className="form-group">
		      		<label htmlFor="">Email: </label>
		      		<input type="text"
		      			   className="form-control"
		      			   value={this.state.email}
		      			   onChange={this.onChangeEmail}/>
		      	</div>

		      	<div className="form-group">
		      		<label htmlFor="">Photo: </label>
		      		<input type="file"
		      			   onChange={this.onChangePhoto}/>
		      	</div>

		      <div className="form-group">
		        <input type="submit" value="Save" className="btn btn-primary"/>
		      </div>
		    </form>
		</div>
    )
  }
}