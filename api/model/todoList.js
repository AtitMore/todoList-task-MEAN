let mongoose = require('mongoose').connection
let Schema = require('mongoose').Schema

let todoSchema = new Schema({

}, {
    strict: false
});

const todoModel = mongoose.model('todo_list', todoSchema, 'todo_list')
module.exports = todoModel;