const express = require("express");
const router = express.Router();

const Newsletter = require("../models/Newsletter");
const parser = require("../configs/cloudinary");

router.post('/create', parser.single("image") ,function(req, res, next) {
    res.json(req.file);
});

module.exports = router;