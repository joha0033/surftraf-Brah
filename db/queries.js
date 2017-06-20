const knex = require('./knex')
module.exports = {

  getAllSurfers(){
    return knex('surfer')
  },
  getAllBreaks(){
    return knex('break')
  },
  getOneSurfer(id) {
    return knex('surfer').where('id', id).first();
  },
  getOneBreak(id) {
    return knex('break').where('id', id).first();
  },
  getSurferBreaks(id) {
    return knex('break').where('surfer_id', id);
  },
  getSurfersAtBreak(id) {
    return knex('break').where('break.id', id)
    .select('break.id', 'break.name', 'break.break_type', 'surfer.email')
    .join('surfer', 'surfer.break_id', 'break.id')
  },
  createBreak(breaks) {
    return knex('break').insert(breaks,'*')
  }
}
