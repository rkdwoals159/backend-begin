"use strict";

const express = require("express");
const router = express.Router();

router.set("views", "../views");
router.set("view engine", "ejs");

router.get("/", (req, res) => {
  res.render("home/index");
});
router.get("/login", (req, res) => {
  res.render("home/login");
});

module.exports = router;
