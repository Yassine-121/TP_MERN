import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class CreateUser extends Component {
	constructor(props){
		super(props);

		this.onChangeUsername = this.onChangeUsername.bind(this);
		this.onChangeGender = this.onChangeGender.bind(this);
		this.onChangeDob = this.onChangeDob.bind(this);
		this.onChangeNews = this.onChangeNews.bind(this);
		this.onChangeEmail = this.onChangeEmail.bind(this);
		this.onChangePhoto = this.onChangePhoto.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			username: '',
			gender: 0,
			dob: new Date(),
			news: 0,
			email: '',
			photo: ''
		}
	}

//Method to update the state properties
	onChangeUsername(e){
		this.state({
			username: e.target.value
		});
	}

	onChangeGender(e){
		this.state({
			gender: e.target.value
		});
	}

	onChangeDob(dob){
		this.state({
			dob: dob
		});
	}

	onChangeNews(e){
		this.state({
			News: e.target.value
		});
	}

	onChangeEmail(e){
		this.state({
			Email: e.target.value
		});
	}

	onChangePhoto(e){
		this.state({
			Photo: e.target.value
		});
	}

//Method to handle the submit event

	onSubmit(e){
		e.preventDefault();

		const user = {
			username: this.state.username,
			gender: this.state.gender,
			dob: this.state.dob,
			news: this.state.news,
			email: this.state.email,
			photo: this.state.photo,
		};

		console.log(user);

		window.location = '/';
	}

  render() {
    return (
    	<div>
		        <h5>Nouveau Utilisateur</h5>
		    <form className="modal-content">

		      	<div className="form-group">
		      		<label htmlFor="">Username: </label>
		      		<input type="text"
		      			   className="form-control"
		      			   value={this.state.username}
		      			   onChange={this.onChangeUsername}/>
		      	</div>

		      	<div className="form-group">
    				<label htmlFor="">Gender: </label>
    				<select value={this.state.gender} onChange={this.handleChange}>
    					<option value="1">Male</option>
    					<option value="0">Female</option>
    				</select>
		      	</div>

		      	<div className="form-group">
		      		<label htmlFor="">date: </label>
		      		<div>
 						<DatePicker
 							selected={this.state.dob}
 							onChange={this.onChangeDate}
 						/>
		      		</div>
		      	</div>

		      	<div className="form-group">
    				<label htmlFor="">News: </label>
    				<select value={this.state.news} onChange={this.handleChange}>
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
		      		<input type="text"
		      			   className="form-control"
		      			   value={this.state.photo}
		      			   onChange={this.onChangePhoto}/>
		      	</div>

		      <div className="modal-footer">
		        <button type="button" className="btn btn-primary">Saves</button>
		      </div>
		    </form>
		</div>
    )
  }
}