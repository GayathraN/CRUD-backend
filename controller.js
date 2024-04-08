// controller.js

const User = require('./model');

// Define getusers function
const getusers = (req, res, next) => {
    User.find()
        .then(response => {
            res.json({ response });
        })
        .catch(error => {
            res.json({ error });
        });
};

// Adduser, updateUser, deleteUser functions...

const adduser = (req, res, next) => {
    const { id, name } = req.body;

    const user = new User({
        id: req.body.id,
        name: req.body.name,
    });

    user.save()
        .then(response => {
            res.json({ response });
        })
        .catch(error => {
            res.json({ error });
        });
};

const updateUser = (req, res, next) => {
    const { id, name } = req.body;

    User.updateOne({ id: id }, { $set: { name: name } })
        .then(response => {
            res.json({ response });
        })
        .catch(error => {
            res.json({ error });
        });
};

const deleteUser = (req, res, next) => {
    const id  = req.body.id;

    User.deleteOne({ id: id })
        .then(response => {
            res.json({ response });
        })
        .catch(error => {
            res.json({ error });
        });
};

exports.getusers = getusers;
exports.adduser = adduser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
