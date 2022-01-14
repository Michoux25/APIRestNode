const router = require("express").Router();
const Todo = require("../models/TodoModel")

router.post('/', async (req, res) => {
    try {
        const todo = await Todo.create(req.body)
        if(!todo) throw Error('Something went wrong with the todo')
        res.status(200).json(todo);
    } catch (e) {
        res.status(400).json({msg:e})
    }
});

router.get('/', async (req, res) => {
    try {
        const todo = await Todo.find();
        if(!todo) throw Error('No Items');
        res.status(200).json(todo);
    }catch(err) {
        res.status(400).json({mesg: err})
    }
});

router.get('/:id', async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if(!todo) throw Error('No Items');
        res.status(200).json(todo);
    }catch(err) {
        res.status(400).json({mesg: err})
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body);
        if(!todo) throw Error('Something went wrong while updating the post');
        res.status(200).json({success: true});
    }catch(err) {
        res.status(400).json({msg:err});
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id);
        if(!todo) throw Error('No post found!');
        res.status(200).json({success: true})
    }catch(err) {
        res.status(400).json({msg: err})
    }
});


module.exports = router;