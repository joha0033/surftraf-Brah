const express = require('express');
const router = express.Router();

const queries = require('../db/queries');

function isValidId(req, res, next) {
  if (!isNaN(req.params.id)) return next();
  next(new Error('Invalid ID'));
}

// function validPicture(pictures) {
//   const validUrl = typeof pictures.url === 'string' && pictures.url.trim() != '';
//   return validUrl;
// }

router.get('/', (req, res) => {
  queries.getAllSurfers().then(surfers =>{
    res.json(surfers);
  })
})
// router.getSurfer('/:id', isValidId, (req, res, next) => {
//   queries.getOne(req.params.id).then(surfers =>{
//     if (surfers) res.json(surfers)
//     else next(new Error('Invalid ID'))
//   })
// })


module.exports = router
