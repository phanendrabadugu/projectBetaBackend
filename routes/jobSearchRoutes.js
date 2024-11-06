const express = require('express');
const {studentSearch,selectedJobApplication} = require('../controllers/jobSearchControllers')


const router = express.Router();

router.get("/studentSearch", studentSearch);
router.post("/submitJobApplication", selectedJobApplication);

module.exports = router;
