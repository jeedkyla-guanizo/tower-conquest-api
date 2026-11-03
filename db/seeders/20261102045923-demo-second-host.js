'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      { 
        user_id: 4,
        username: 'bencastro',
        school_id: '2099-0004', 
        full_name: 'Ben Castro', 
        email: 'ben.castro@towerconquest.test', 
        role: 'HOST',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', { school_id: '2099-0004' }, {});
  }
};