const express = require('express')
const router = express.Router()

// /arc-sw.js
router.get('/arc-sw.js', async (req, res) => {
    res.sendFile(`${process.cwd()}/views/arc-sw.js`)
})

// /
router.get('/', async (req, res) => {
    res.render('home.ejs')
})
router.get('/home', async (req, res) => {
    res.redirect('/')
})
router.get('/index', async (req, res) => {
    res.redirect('/')
})

// /assets
router.get('/assets', async (req, res) => {
    res.render('assets.ejs')
})

// /projects
router.get('/projects', async (req, res) => {
    res.render('projects.ejs')
})

module.exports = router
