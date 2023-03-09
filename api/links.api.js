const {Links} = require('../models/links');
const {Router} = require('express')

const router = Router();

function makeCut(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

router.post('/links',  async (req, res) => {
    const { 
        link: {
            original
        }
    } = req.body;
    const {
        userId
    } = req.headers;

    try {
        const login = await Links.findOne({userId})

        if(!login) {
            return res.status(401).send({message: 'User is not authorized'})
         }
     
         const shortLink = Links.findOneAndUpdate(
            { link: {cut}, expiredAt },
            {
                $set: {cut: makeCut(15)},
                $set: {expiredAt: new Date() }
            }
            );
     
         const doc = await shortLink.save();
     
         return res.status(200).send(doc);
    } catch (err) {
        console.error(err);
        res.status(400).send({ message: err.toString() });
       }

})