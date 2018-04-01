const Sequelize = require('sequelize')
const faker = require('faker')

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

// define schema
const Post = sequelize.define('post', {
    title: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.STRING
    }
})

// Relations
Person.hasMany(Post)
Post.belongsTo(Person)

module.exports = sequelize