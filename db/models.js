let connection = require('./connection.js'),
    Sequelize = require('sequelize')

let reservations = connection.define('reservations',
{
    firstname:{ type:Sequelize.STRING},
    lastname:{type:Sequelize.STRING},
    arrival:{type:Sequelize.STRING},
    departure:{type:Sequelize.STRING}
})

reservations.sync({force:true}).then(()=>{
    return reservations.create({
        firstname:'Mitchell',
        lastname:'Philmore',
        arrival:'01/22/2019',
        departure:'01/29/2019'
    })
})

let reviews = connection.define("reviews",

{
    name:{type:Sequelize.STRING},
    comment:{type:Sequelize.STRING}
})

reviews.sync({force:true}).then(()=>{
    return reviews.create({
        name:'John Doe',
        comment:'The best hotel in Philadelphia by far'
    })
})


module.exports = {
    reviews:reviews,
    reservations:reservations
}