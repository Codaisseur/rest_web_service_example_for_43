"use strict";
const { treetype, user, treelocation } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const birch = await treetype.findOne({
      where: {
        name: "Birch",
      },
    });

    const weeping_willow = await treetype.findOne({
      where: {
        name: "Weeping Willow",
      },
    });

    await treelocation.create({
      lat: 50.5586904,
      lng: 6.1049821,
      treetypeId: birch.id,
    });

    await treelocation.create({
      lat: 50.5586904,
      lng: 6.1047821,
      treetypeId: birch.id,
    });

    await treelocation.create({
      lat: 50.5585571,
      lng: 6.1055712,
      treetypeId: weeping_willow.id,
    });
  },

  down: async (queryInterface, Sequelize) => {
    // nope
  },
};
