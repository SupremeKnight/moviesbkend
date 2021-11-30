const mongoose = require("mongoose")
const userModel = require("../models/User")

mongoose.connect('mongodb+srv://Anass:ANNASS-EVERY@cluster0.g2oli.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {autoIndex: false});


function authenticate(req, resp) {
    const creds = req.body;
    userModel
        .findOne({login: creds.login, password: creds.password}).then(res => {
        resp.status(200).send(res ?
            {id: res._id, email: res.login}
            : {id: null});
    })
}

async function create(req, resp) {
    let breakIt = false;
    let idVal = 0;
    userModel.findOne({login: req.body.email}).then(res => {
        if (res != null) {
            resp.status(200).send({exists: true});
            breakIt = true;
        }
    })
    if (breakIt) return;
    await userModel.count().then(res => {
        idVal = res+10;
    })
    const user = {
        _id: idVal,
        login: req.body.email,
        password: req.body.password
    }
    new userModel(user).save();
    resp.status(200).send({exists: false});
}


async function update(req, resp) {
    const id = req.params.id;
    const film = req.body;
    userModel.updateOne({_id: id}, film)
    resp.status(200).send("");
}

function del(req, resp) {
    const id = req.params.id;
    userModel.remove({_id: id});
    resp.status(200).send("");
}

module.exports = {
    authenticate: authenticate,
    create: create,
    update: update,
    delete: del,
}
