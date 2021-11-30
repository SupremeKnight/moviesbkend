const mongoose = require("mongoose")
const favorisModel = require("../models/Favoris")
const ObjectId = mongoose.Types.ObjectId;
mongoose.connect('mongodb+srv://Anass:ANNASS-EVERY@cluster0.g2oli.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {autoIndex: false});


function createFavoris(req, resp) {
    const uid = req.params.uid;
    const fid = req.params.fid;
    favorisModel.findOne({film: fid, user: uid}).then(res => {
        console.log("result", res);
        if (res == null) {
            new favorisModel({film: fid, user: uid}).save();
        } else {
            res.remove()
        }
    })
    resp.status(200).send("");
}

async function getById(req, resp) {
    let uid = req.params.uid;
    await favorisModel.where("user").equals(uid).then(res => {
        const lst = [];
        for (const re of res) {
            lst.push(re.film);
        }
        resp.status(200).send(lst);
    });
}



function deleteFavoris(req, resp) {
    const id = req.params.id;
    favorisModel.remove({_id: id});
    resp.status(200).send("");
}


function contains(req, resp) {
    const uid = req.params.uid;
    const fid = req.params.fid;
    favorisModel.findOne({film: fid, user: uid}).then(res => {
        if (res == null) {
            resp.status(200).send(false);
        } else {
            resp.status(200).send(true);
        }
    })
}

module.exports = {
    get: getById,
    create: createFavoris,
    delete: deleteFavoris,
    contains: contains,
}
