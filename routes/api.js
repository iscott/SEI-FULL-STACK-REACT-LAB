var router = require("express").Router();
const scoresCtrl = require("../controllers/scores");

// GET /api/scores
router.get("/scores", scoresCtrl.index);

// POST /api/scores
// TODO: Write code here for adding a score - CREATE action for scores

module.exports = router;
