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
sequelize.define('person', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    },
})

console.log('======', sequelize.models)

module.exports = sequelize