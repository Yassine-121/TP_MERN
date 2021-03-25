const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
 {

	username : {type:String},
	gender : {type:String},
	dob : {type:Date}, // date de naissance
	news : {type:Boolean},
	email : {type:String},
	photo : {type:String},
},{
	timestamp: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;