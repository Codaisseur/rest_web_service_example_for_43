const express = require("express")
const { Router } = express
const router = new Router()

const { user } = require("../models");

router.get("/" ,async (req, res) => {
    const users = await user.findAll();
    res.send(users);
  })

router.post("/", async (req, res) => {
    const {email , name, password} = req.body
    const users = await user.create({   email , name, password});
    res.send(users);
  })

module.exports = router
