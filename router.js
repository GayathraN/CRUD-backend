const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/users', controller.getusers);
router.post('/createuser', controller.adduser);
router.post('/updateuser', controller.updateUser);
router.post('/deleteuser', controller.deleteUser);

module.exports = router;