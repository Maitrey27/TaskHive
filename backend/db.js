const mongoose = require("mongoose"); 
const { boolean } = require("zod");
//localhost:27017

mongoose.connect("mongodb://127.0.0.1:27017/todos");

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : {
        type: Boolean,
        default : false
    },
})

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}