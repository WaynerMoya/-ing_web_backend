const express = require('express')
const router = express.Router();

const BonusController = require('../Controllers/BonusController')

router.post('/createBonus' , BonusController.createBonus)
router.get('/getAllBonus' , BonusController.getAllBonus)


module.exports = router