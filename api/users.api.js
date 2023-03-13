const { Users } = require('../models/users')
const { Router } = require('express');
const { v4: uuidv4 } = require('uuid');

const router = Router();

const token = uuidv4();

router.post("/users", async (req, res) => {
    const { 
        email, password, apiKey = token
    } = req.body;
    try {
     const user = new Users({ email, password, apiKey });

    const userEmail = await Users.findOne({email});
     if(userEmail){
        return res.status(400).send({message: 'This email is already in use'});
     }
     if(!email){
        return res.status(400).send({message: 'This field email is required!'});
     }
     if(!password){
        return res.status(400).send({message: 'This field password is required!'});
     }
     const doc = await user.save();

     return res.status(200).send(doc);

    } catch (err) {
     console.error(err);
     res.status(400).send({ message: err.toString() });
    }
});

router.get("/users/login", async (req, res) => {
    const { 
        email, password
    } = req.query;

    try {
        if (!email) {
            return res.status(400).send({
             message: 'Parameter email is required'
            });
           }
          
           if (!password) {
            return res.status(400).send({
             message: 'Parameter password is required'
            });
           }
    
           const user = await Users.findOne({email, password})
          
          
           if (!user) {
            return res.status(400).send({
             message: 'We not found any user with combination'
            });
           } else {
            res.status(200).send({ user });
           }
       
    } catch {
        console.error(err);
        res.status(400).send({ message: err.toString() });
    }

});


module.exports = { router };