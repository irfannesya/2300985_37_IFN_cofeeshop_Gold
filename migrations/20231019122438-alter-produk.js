'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.addColumn('produks', 'image',
      {
        type: Sequelize.STRING,
        allowNull: true
      })

      .then(() => {
        return queryInterface.addColumn("produks", "deskripsi", {
          type: Sequelize.STRING,
        });
      })

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.removeColumn('produks', 'image');
    await queryInterface.removeColumn('produks', 'deskripsi');

  }
};
