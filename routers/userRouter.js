const express = require("express")
const { Router } = express
const router = new Router()
const bcrypt = require("bcrypt")

const { user } = require("../models");

router.get("/" ,async (req, res) => {
    const users = await user.findAll();
    res.send(users);
  })

router.get("/:id" ,async (req, res) => {
    console.log("what is my request", req.params.id)
    const users = await user.findOne({where: {id: req.params.id}});
    res.send(users);
  })

router.post("/", async (req, res) => {
    const {email , name, password} = req.body
    try{
      const hashedPassword = bcrypt.hashSync(password, 10)
      const users = await user.create({   email , name,  password: hashedPassword});
      res.send(users);
    }
    catch(err){
      console.log("what is the err", err)
      res.status(400).send({msg: "user could not be created"})

    }
  })




module.exports = router
