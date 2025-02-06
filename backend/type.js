const zod = require("zod");

/*
    {
        title:String
        Description: String
    }

    {
        id:String
    }
*/ 

const createTodo = zod.object({
    title: zod.string().min(1),
    description : zod.string().min(1),
})

const updateTodo = zod.object({
    id : zod.string(),

})

//to export the obj to another files
module.exports = {
    createTodo :createTodo,
    updateTodo : updateTodo
}