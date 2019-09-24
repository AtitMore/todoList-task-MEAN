const mongoose = require('mongoose');
const todoModel = require('../model/todoList');
const TodoListController = {};


TodoListController.insertTodoList = async (req, res) => {
    try {
        let reqBody = JSON.parse(JSON.stringify(req.body));
        
        if(reqBody.type == 'direct'){

            todoModel.create(reqBody)
                .then((data) => {
                    res.status(200).send({
                        "status": 200,
                        data: data,
                        "message": "Data inserted",
                    })
                }).catch((err) => {
                    res.status(200).send({
                        "status": 404,
                        error: err,
                        "message": "Error Occurs",
                    })
                })
        } else {
            const data = {
                id: reqBody.id,
                status: reqBody.status
            }
            console.log(data);
            todoModel.update({_id: data.id}, 
                {
                    $set: 
                    {
                    status: data.status
                    }
                })
                .then((data) => {
                    res.status(200).send({
                        "status": 200,
                        data: data,
                        "message": "Data inserted",
                    })
                }).catch((err) => {
                    res.status(200).send({
                        "status": 404,
                        error: err,
                        "message": "Error Occurs",
                    })
                })
        }

    } catch (err) {
        console.log(err);
    }
}

TodoListController.displayTodoList = async (req, res) => {
    try {
        todoModel.find()
            .then((data) => {
                res.status(200).send({
                    "status": 200,
                    data: data,
                    "message": "Data Found",
                })
            }).catch((err) => {
                res.status(200).send({
                    "status": 404,
                    error: err,
                    "message": "Error Occurs",
                })
            })

    } catch (err) {
        console.log(err);
    }
}

TodoListController.deleteTodoList = async (req, res) => {
    let reqBody = JSON.parse(JSON.stringify(req.body));
    try {
        todoModel.deleteOne({ _id: reqBody.id })
            .then((data) => {
                res.status(200).send({
                    "status": 200,
                    data: data,
                    "message": "Data Found",
                })
            }).catch((err) => {
                res.status(200).send({
                    "status": 404,
                    error: err,
                    "message": "Error Occurs",
                })
            })

    } catch (err) {
        console.log(err);
    }
}

module.exports = TodoListController;