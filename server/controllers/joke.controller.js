const Joke = require("../models/joke.model");

module.exports.testRoute = (req,res) => {
    res.json({message: "hello from the controller!!"});
}
module.exports.getAll = (req,res) => {
    Joke.find({})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message:"that didn't quite work",err}))
}
module.exports.getOne = (req,res) => {
    Joke.find({_id: req.params._id})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message:"that didn't quite work",err}))
}
module.exports.create = (req,res) => {
    Joke.create(req.body)
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message:"that didn't quite work",err}))
}
module.exports.deleteOne = (req,res) => {
    Joke.deleteOne({_id: req.params._id})
        .then(result => res.json(result))
        .catch(err => res.status(400).json({message:"that didn't quite work",err}))
}

module.exports.updateOne = (req,res) => {
    Joke.updateOne({_id:req.params._id},req.body,{runValidators:true})
        .then(result => res.json(result))
        .catch(err => res.status(400).json({message:"that didn't quite work",err}))
}