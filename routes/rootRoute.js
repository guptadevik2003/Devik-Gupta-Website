const express = require('express')
const router = express.Router()


// <==== CBSE PROJECT REMAS STRT ====>
const CBSEProject = `https://drive.google.com/drive/folders/1VpvgyX_oP0e0wry5I0UZTBnY6Ir7Sd7M?usp=sharing`
// /cbse
router.get('/cbse', async (req, res) => {
    res.redirect(CBSEProject)
})
// /remas
router.get('/cbse', async (req, res) => {
    res.redirect(CBSEProject)
})
// <==== CBSE PROJECT REMAS ENDS ====>


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
