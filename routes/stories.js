const express = require('express')
const router = express.Router()
const {ensureAuth} = require('../middleware/auth')

//bring in story
const Story = require('../models/Story')

//@des show add page
//@route GET /stories/add
router.get('/add', ensureAuth, (req, res) => {
    res.render('stories/add')
})

module.exports = router