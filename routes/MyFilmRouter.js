const express = require('express');
const filmController = require("../controller/FilmController")
const router = express.Router();

const BASE_URL = "/API/films/";

router.get(BASE_URL+"get/:id", filmController.get)

router.get(BASE_URL+"all", filmController.getAll)

router.post(BASE_URL+"create", filmController.create)

router.put(BASE_URL+"update/:id", filmController.update)

router.delete(BASE_URL+"delete/:id", filmController.delete)

module.exports = router;
