const express = require('express');
const router = express.Router();

const stuffCtrl = require('../controllers/sauces');

router.get('/', stuffCtrl.getAllSauces);
router.post('/', stuffCtrl.createThing);
router.get('/:id', stuffCtrl.getOneThing);
router.put('/:id', stuffCtrl.modifyThing);
router.delete('/:id', stuffCtrl.deleteThing);

module.exports = router;