const express = require("express");
const dataController = require("../controllers/data");

const router = express.Router();

router.get("/get", dataController.getData);

router.post("/add", dataController.addData);

router.post("/delete", dataController.deleteData);

router.post("/edit", dataController.editData);

module.exports = router;
