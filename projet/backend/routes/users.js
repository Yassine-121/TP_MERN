const router = require('express').Router();
let User = require('../models/user.model');

router.route('/users').get((req, res) => {
  User.find()
  	.then(users => res.json('YES!!!'))
    .catch(err => res.status(400).json('Yassine: ' + err));
});

/*router.route('/users/:page/:size').get((req, res) => {
  User.find(req.params.id)
    .catch(err => res.status(400).json('Error: ' + err));
});*/

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const gender = req.body.gender;
  const dob = req.body.dob;
  const news = req.body.news;
  const email = req.body.email;
  const photo = req.body.photo;

  const newUser = new User({username,gender,dob,news,email,photo});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').put((req, res) => {
	const thing = new Thing({
		_id: req.params.id,
		username: req.body.username,
		gender: req.body.gender,
		dob: req.body.dob,
		news: req.body.new,
		email: req.body.email,
		photo: req.body.photo,
	});
	Thing.updateOne({_id: req.params.id}, thing).then(
		() => {
			res.status(201).json({
				message: 'Modifié avec succées!'
			});
		}
	).catch(
		(error) => {
			res.status(400).json({
				error: error
			});
		}
	);
});

router.route('/:id').delete((req, res) => {
	Thing.deleteOne({_id: req.params.id}).then(
		() => {
			res.status(200).json({
				message: 'Utilisateur Supprimer!'
			});
		}
	).catch(
		(error) => {
			res.status(400).json({
				error: error
			});
		}
	);
});

module.exports = router;