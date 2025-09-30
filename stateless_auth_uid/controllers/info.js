const info = require('../models/info');

const handleGetRequest = async (req, res) => {
    try {
        const infos = await info.find();
        res.status(200).json(infos);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching info' });
    }
};

const handlePostRequest = async (req, res) => {
    try {
        const {name,age,email} = req.body;
        const newInfo = new info({ name, age, email });
        await newInfo.save();
        res.status(201).json(newInfo);
    } catch (error) {
        res.status(500).json({ message: 'Error creating info' });
    }
};

module.exports = {
    handleGetRequest,
    handlePostRequest
};
