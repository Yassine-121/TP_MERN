const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
 {

	username : <username>,
	gender : <male|female>,
	dob : <yyyy-mm-dd>, // date de naissance
	news : <boolean>,
	email : <email>,
	photo : <url>,
  	timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;