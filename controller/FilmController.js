
const filmModel = require("../models/Film")



function homePage(req, resp) {
    resp.send("Hello World");
}

function createFilm(req, resp) {
    const film = new filmModel(req.body);
    film.save();
    resp.status(200).send("");
}

async function getById(req, resp) {
    let id = Number(req.params.id);
    let res = await filmModel.findById(id);
    resp.status(200).send(res);
}

async function getAll(req, resp) {
    let res = await filmModel.find();
    resp.status(200).send(res);
}

async function updateFilm(req, resp) {
    const id = req.params.id;
    const film = req.body;
    filmModel.updateOne({_id: id}, film)
    resp.status(200).send("");
}

function deleteFilm(req, resp) {
    const id = req.params.id;
    filmModel.remove({_id: id});
    resp.status(200).send("");
}

module.exports = {
    get: getById,
    homePage: homePage,
    getAll: getAll,
    create: createFilm,
    update: updateFilm,
    delete: deleteFilm,
}
