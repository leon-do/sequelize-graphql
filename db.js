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



// uncomment to create fake data
// sequelize
//     .sync({force: true})
//     .then(() => {
//         console.log('db.js::populating data...')
//         for (let i = 1; i<10; i++) {
//             person.create({
//                 firstName: `first_name_${i}`,
//                 lastName: `last_name_${i}`,
//             })
//             album.create({
//                 song: `album_song_${i}`,
//                 artist: `album_artist_${i}`,
//             })
//         }
//     })

console.log('db.js::sequelize.models =', sequelize.models)
module.exports = sequelize