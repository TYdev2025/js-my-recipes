
const router = require('express').Router()
const path = require('path')
const root = path.join(__dirname, '..', '..', 'public')

router.get('/', (_, response) => response.sendFile('index.htm', { root }))

router.post('/recipe/add', (_, response) => response.sendFile('index.htm', { root })) //

router.get('/recipe/:id', (_, response) => response.sendFile('index.htm', { root })) //

module.exports = router