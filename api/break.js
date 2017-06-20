const express = require('express');
const knex = require('../db/knex')
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
router.get('/:id/surfers', isValidId, (req, res, next) => {
 queries.getSurfersAtBreak(req.params.id)
 .then(breaks =>{
   const breakBySurfer= {};
   const surferAtBreak = [];
   breaks.forEach(breaksTwo => {
     if (!breakBySurfer[breaksTwo.name]) {
       const breaksWithAllSurfers = {
         name: breaksTwo.name,
         break_type: breaksTwo.break_type,
         emails: []
       };
       surferAtBreak.push(breaksWithAllSurfers);
       breakBySurfer[breaksTwo.name] = breaksWithAllSurfers;
     }
     breakBySurfer[breaksTwo.name].emails.push(breaksTwo.email)
   })
   res.json(surferAtBreak)
 })
})

module.exports = router
