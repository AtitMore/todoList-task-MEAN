const express = require('express');
const router = express.Router();

const TodoListController = require('../controller/todoListController');

router.post('/insert_todoList', TodoListController.insertTodoList, (req, res) => {
});

router.post('/display_task', TodoListController.displayTodoList, (req, res) => {
});

router.post('/delete_task', TodoListController.deleteTodoList, (req, res) => {
});

module.exports = router