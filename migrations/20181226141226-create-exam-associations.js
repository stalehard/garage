"use strict";
const tableName = "exams";
const referenceTable = "users";
const column = "userId";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.describeTable(tableName).then(tableDefinition => {
      if (tableDefinition[column]) return Promise.resolve();

      return queryInterface.addColumn(tableName, column, {
        type: Sequelize.INTEGER,
        references: {
          model: referenceTable,
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      });
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(tableName, column);
  }
};
