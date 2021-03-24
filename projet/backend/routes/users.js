const router = require('express').Router();
let User = require('../models/user.model');
const path = require("path");
const multer = require("multer");

var storage = multer.diskStorage({
      destination: function (req, file, cb) {
      cb(null, 'public/uploads/');
    },
    filename: function (req, file, cb) {
    	console.log(file);
      cb(null, Date.now() + '-' +file.originalname);
    }
})

var upload = multer({ storage: storage });

//Affiche tous les utilisateurs
router.route('/AllUsers').get((req, res) => {
  User.find()
  	.then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Affiche un utilisateur
router.route('/edit/:id').get((req, res) => {
	User.findById(req.params.id)
		.then(users => res.json(users))
		.catch(err => res.status(400).json('Error: ' + err));
});

/*router.route('/users/:page/:size').get((req, res) => {
  User.find(req.params.id)
    .catch(err => res.status(400).json('Error: ' + err));
});*/

//Ajoute un utlisateur
router.route('/users').post(upload.single('photo'),(req, res) => {
  const username = req.body.username;
  const gender = req.body.gender;
  const dob = req.body.dob;
  const news = req.body.news;
  const email = req.body.email;
  const photo = req.file.path;

  const newUser = new User({username,gender,dob,news,email,photo});

  newUser.save()
    .then(() => res.json('Utilisateur ajouté avec succées!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Modifie un utilisateur
router.route('/users/:id').put((req, res) => {
	User.findById(req.params.id)
		.then(users => {
			users.username = req.body.username;
			users.gender = req.body.gender;
			users.dob = Date.parse(req.body.dob);
			users.news = req.body.news;
			users.email = req.body.email;
			users.photo = req.body.photo;

			users.save()
				.then(() => res.json('Utilisateur modifié avec succées!'))
				.catch(err => res.status(400).json('Error: ' + err));
		})
		.catch(err => res.status(400).json('Error: ' + err));
});

//Supprime un utilisateur
router.route('/users/:id').delete((req, res) => {
	User.findByIdAndDelete(req.params.id)
		.then(() => res.json('Utilisateur supprimer avec succées!'))
		.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;