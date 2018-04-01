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
const person = sequelize.define('person', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    },
})


const album = sequelize.define('album', {
    song: {
        type: Sequelize.STRING
    },
    artist: {
        type: Sequelize.STRING
    }
})


// create fake data
// sequelize
//     .sync({force: true})
//     .then(() => {
//         console.log('db.js::populating data...')
//         for (let i = 0; i<9; i++) {
//             person.create({
//                 firstName: 'fname' + Math.round(Math.random() * 100).toString(),
//                 lastName: 'lname' + Math.round(Math.random() * 100).toString(),
//             })
//             album.create({
//                 song: 'albumSong' + Math.round(Math.random() * 100).toString(),
//                 artist: 'albumArtist' + Math.round(Math.random() * 100).toString(),
//             })
//         }
//     })

console.log('db.js::sequelize.models =', sequelize.models)
module.exports = sequelize