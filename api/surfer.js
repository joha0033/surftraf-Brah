const express = require('express');
const router = express.Router();

const queries = require('../db/queries');

function isValidId(req, res, next) {
  if (!isNaN(req.params.id)) return next();
  next(new Error('Invalid ID'));
}
function validBreak(breaks) {
  const hasName = typeof breaks.name == 'string' && breaks.name.trim() != '';
  const hasBreakType = typeof breaks.break_type == 'string' && breaks.break_type.trim() != '';
  const hasState = typeof breaks.state == 'string' && breaks.state.trim() != '';
  return hasState && hasName && hasBreakType;
}
// TRYING TO COMBINE BREAKS WITH ALL SURFERS, WENT ABOUT IT WRONG.
// const combineBreak = (breaks, res) => {
//   const surferBreaks = [];
//   const surferName = {}
//   breaks.forEach(breaks => {
//     if (!surferName[breaks.name]) {
//       surferBreaks = {
//         id: breaks.id,
//         name: breaks.name,
//         break_type: breaks.break_type,
//         state: breaks.state
//       }
//     }
//   })
// }


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

router.post('/:id/break', isValidId,  (req, res, next) => {
  if (validBreak(req.body)) {
    queries.createBreak(
      {
        name: req.body.name,
        break_type: req.body.break_type,
        state: req.body.state,
        surfer_id: req.params.id
      }
    ).then(surfer => {
      res.json(surfer);
    })
  } else {
    next(new Error('Invalid Break'))
  }
})

module.exports = router
