const express = require('express');
const controller = require("../controller/FavorisController")
const router = express.Router();

const BASE_URL = "/API/favoris/";

router.get(BASE_URL+"get/:uid", controller.get)

router.get(BASE_URL+"create/:uid/:fid", controller.create)

router.get(BASE_URL+"contains/:fid/:uid", controller.contains)

router.delete(BASE_URL+"delete/:id/", controller.delete)

module.exports = router;
