const router = require('express').Router();
const Joi = require('joi');
const store = require('../store');
const helpers = require('../helpers/helpers');
const { responsePayload } = helpers;

router.get('/', (req, res) => {
  res.send(responsePayload(200, store.genres, 'success'))
});

router.get('/:genreId', (req, res) => {
  const id = Number(req.params.genreId);
  const genre = store.genres.find(genre => genre.id === id)

  if (!genre) return res.status(404).send(responsePayload(404, null, 'Genre not found, please try a different id'))

  return res.status(200).send(responsePayload(200, [genre], 'success'))
});

router.post('/', (req, res) => {
  const schema = {
    title: Joi.string().min(3).required(),
    description: Joi.string().optional()
  };

  const validation = Joi.validate(req.body, schema);

  if (validation.error) {
    const errorMessage = validation.error.details.concat()[0].message;
    return res.status(400).send(responsePayload(400, null, errorMessage));
  }

  const newGenre = { id: store.genres.length + 1, title: req.body.title, description: req.body.description || '' };
  store.genres.push(newGenre);

  return res.status(200).send(responsePayload(200, [newGenre], 'success'))
});

router.put('/:id', (req, res) => {
  const schema = {
    title: Joi.string().min(3).required(),
    description: Joi.string().optional()
  };

  const id = Number(req.params.id);
  const genre = store.genres.find(genre => genre.id === id)

  if (!genre) return res.status(404).send(responsePayload(404, null, 'Genre not found, please try a different id'))

  const validation = Joi.validate(req.body, schema);

  if (validation.error) {
    const errorMessage = validation.error.details.concat()[0].message;
    return res.status(400).send(responsePayload(400, null, errorMessage));
  }

  genre.title = req.body.title;
  genre.description = req.body.description || '';

  return res.status(200).send(responsePayload(200, [genre], 'success'))
});


router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  const genre = store.genres.find(genre => genre.id === id)

  if (!genre) return res.status(404).send(responsePayload(404, null, 'Genre not found, please try a different id'))

  const genreIndex = store.genres.findIndex(genre => genre.id === id);
  store.genres.splice(genreIndex, 1);

  return res.status(200).send(responsePayload(200, [genre], 'success'))
});

module.exports = router;
