const express = require('express');
const router = express.Router();
const className = require('../controller/classController')


router.post('/classController', className);