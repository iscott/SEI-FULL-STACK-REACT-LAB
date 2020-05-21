// TODO: Require model - mongodb

const dummyHighScores = [
  { number: 1, initials: "IRA", guesses: 1, time: "00:00" },
  { number: 2, initials: "IRA", guesses: 1, time: "00:00" },
  { number: 3, initials: "IRA", guesses: 1, time: "00:00" },
];

function index(req, res) {
  // TODO: Replace dummy data with live data from mongodb
  // Add Score model and schema
  // Use https://git.generalassemb.ly/SEI/dt-71/blob/master/units/2_full_stack/w05/d3/01-producing-an-api-in-express/final-code/puppies-api/controllers/api/puppies.js
  // as REST actions reference
  res.json(dummyHighScores);
}

function create(req, res) {
  // TODO: Code up a high score create action
}

module.exports = { index, create };
