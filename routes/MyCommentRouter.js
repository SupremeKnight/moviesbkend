const express = require('express');
const controller = require("../controller/CommentController")
const router = express.Router();

const BASE_URL = "/API/comments/";

router.get(BASE_URL + "get/:id", controller.get)

router.get(BASE_URL + "byUser/:userId", controller.getByUser)

router.get(BASE_URL + "byFilm/:filmId", controller.getByFilm)

router.post(BASE_URL + "create/:fid/:uid", controller.create)

router.put(BASE_URL + "update/:id", controller.update)

router.delete(BASE_URL + "delete/:id", controller.delete)

module.exports = router;
