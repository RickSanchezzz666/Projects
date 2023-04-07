const { Messages } = require('../models/messages');
const { Router } = require('express')

const router = Router();

router.use('/api/message', async (req, res) => {
    const { userName, message, date } = req.body;

    const doc = new Messages({
        userName, 
        message,
        date
    })

    const elem = await doc.save();
    return res.status(200).send(elem);
});

router