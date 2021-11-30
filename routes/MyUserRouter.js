const express = require('express');
const controller = require("../controller/UserController")
const router = express.Router();

const BASE_URL = "/API/users/";

router.post(BASE_URL+"auth", controller.authenticate)

router.post(BASE_URL+"create", controller.create)

router.put(BASE_URL+"update/:id", controller.update)

router.delete(BASE_URL+"delete/:id", controller.delete)

module.exports = router;
