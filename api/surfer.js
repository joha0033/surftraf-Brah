const express = require('express');
const router = express.Router();

const queries = require('../db/queries');

function isValidId(req, res, next) {
  if (!isNaN(req.params.id)) return next();
  next(new Error('Invalid ID'));
}



router.get('/', (req, res) => {
  queries.getAllSurfers().then(surfers =>{
    res.json(surfers);
  })
})

router.get('/:id', isValidId, (req, res, next) => {
  queries.getOneSurfer(req.params.id).then(surfers =>{
    if (surfers) res.json(surfers)
    else next(new Error('Invalid ID'))
  })
})
router.get('/:id/break', isValidId, (req, res, next) => {
  queries.getSurferBreaks(req.params.id).then(surfers =>{
    if (surfers) res.json(surfers)
    else next(new Error('Invalid ID'))
  })
})
// router.post('/:id/break', (req, res, next) => {
//   if (validEvent(req.body)) {
//     queries.createBreak(req.body).then(surfer => {
//       res.json(surfer[0]);
//     })
//   } else {
//     next(new Error('Invalid Event'))
//   }
// })


module.exports = router
