const express = require('express');
const router = express.Router();

const todoList = require('./todoList');

router.use('/todo_list', todoList);

module.exports = router