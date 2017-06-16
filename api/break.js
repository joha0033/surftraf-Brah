const express = require('express');
const router = express.Router();

const queries = require('../db/queries');

function isValidId(req, res, next) {
  if (!isNaN(req.params.id)) return next();
  next(new Error('Invalid ID'));
}

function validSurfer(surfer) {
  let reEmail=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const validEmail = typeof surfer.email === 'string' && pictures.url.trim() != '' && surfer.email.Match(reEmail);
  console.log(validEmail);
  console.log(surfer.email.Match(reEmail));

  return validUrl;
}

router.get('/', (req, res) => {
  queries.getAllBreaks().then(breaks =>{
    res.json(breaks);
  })
})
router.get('/:id', isValidId, (req, res, next) => {
  queries.getOneBreak(req.params.id).then(breaks =>{
    if (breaks) res.json(breaks)
    else next(new Error('Invalid ID'))
  })
})

module.exports = router
