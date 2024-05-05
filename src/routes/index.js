const express = require('express');
const router = express.Router();
const {optimizerForm,optimizerProcess,vistaBarra} = require('../controllers/optimizadorController')

/* GET home page. */
router.get('/', optimizerForm);
router.post('/',optimizerProcess)
router.get('/vistaBarra',vistaBarra)

module.exports = router;
