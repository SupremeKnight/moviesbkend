const mongoose = require("mongoose")
const commentModel = require("../models/Comment")
const userModel = require("../models/User")

mongoose.connect('mongodb+srv://Anass:ANNASS-EVERY@cluster0.g2oli.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {autoIndex: false});


function createComment(req, resp) {
    const comment = req.body;
    new commentModel(comment).save();
    resp.status(200).send("");
}

async function getById(req, resp) {
    let id = Number(req.params.id);
    let res = await commentModel.findById(id);
    resp.status(200).send(res);
}

async function getByUserId(req, resp) {
    let id = Number(req.params.userId);
    let email = "";
    userModel.findOne({_id:id}).then((res)=>{
        email = res.login;
    })
    await commentModel.where({user:id}).then(res=>{
        for (const re of res) {
            re.user = email;
        }
        resp.status(200).send(res);
    });
}

async function getByFilmId(req, resp) {
    let id = Number(req.params.filmId);
    let res = await commentModel.where({film:id});
    for (let re of res){
        let user = await userModel.findById(re.user);
        re.user = user.login;
    }
    resp.status(200).send(res);
}

async function updateComment(req, resp) {
    const id = req.params.id;
    const comment = req.body;
    commentModel.updateOne({_id: id}, comment)
    resp.status(200).send("");
}

function deleteComment(req, resp) {
    const id = req.params.id;
    console.log("remove",id);
    commentModel.findOne({_id:id}).then(res=>{
        res.remove();
    })
    resp.status(200).send("");
}

module.exports = {
    get: getById,
    getByUser: getByUserId,
    getByFilm: getByFilmId,
    create: createComment,
    update: updateComment,
    delete: deleteComment,
}
