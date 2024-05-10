const express = require('express');
const router = express.Router();

const contactController = require('../controller/contact.controller.js');



router.post('/', contactController.createContact);


module.exports = router;