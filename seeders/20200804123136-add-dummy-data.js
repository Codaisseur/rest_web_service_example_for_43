"use strict";
const { treetype, user, treelocation } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const kelley = await user.create({
      name: "Kelley",
      email: "kelley@codaisseur.com",
      password: "1234",
    });
    const ali = await user.create({
      name: "Ali",
      email: "ali@ali.ali",
      password: "acbd",
    });

    const birch = await treetype.create({
      name: "Birch",
      description: "typically leafed ordinary tree",
    });
    const weeping_willow = await treetype.create({
      name: "Weeping Willow",
      description: "everyone's favorite drooping tree",
    });
    const oak = await treetype.create({
      name: "Oak",
      description: "those pointy canadian-style leaves",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
    await queryInterface.bulkDelete("treelocations", null, {});
  },
};
