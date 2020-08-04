'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("treelocations", "treetypeId", {
      type: Sequelize.INTEGER,
      references: {
        model: "treetypes",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("treelocations", "treetypeId");
  },
};
