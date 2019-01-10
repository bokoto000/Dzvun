const Sequelize = require('sequelize');

const sequelize = new Sequelize('Dzvun', 'postgres', '12356', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    define: {
        timestamps: false
    },
  
  });

  module.exports = sequelize;