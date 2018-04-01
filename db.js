const Sequelize = require('sequelize')

const sequelize = new Sequelize(
    'postgres',
    'postgres',
    'root',
    {
        dialect: 'postgres',
        host: 'localhost'
    }
)

// define schema
const Person = sequelize.define('person', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    },
})

module.exports = sequelize