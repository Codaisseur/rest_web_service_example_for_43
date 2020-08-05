const express = require("express")

const { Router } = express

const router = new Router()



const { treelocation } = require("../models");


router.get("/" ,async (req, res) => {
    const trees = await treelocation.findAll();
    res.send(trees);
  })
  
router.post("/", async (req, res) => {
    const trees = await treelocation.create({lat: 50.5585571, lng: 6.1055712, treetypeId: 1});
    res.send(trees);
  });


module.exports = router
