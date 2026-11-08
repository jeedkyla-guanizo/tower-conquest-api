'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('question_sets', [
      {
        host_id: 4,
        title: 'Tower Conquest Demo Set',
        subject: 'General Knowledge',
        is_public: true,
        created_at: new Date()
      }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('question_sets', {
      host_id: 4,
      title: 'Tower Conquest Demo Set'
    });
  }
};