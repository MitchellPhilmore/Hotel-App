let mysql = require('mysql2'),
    Sequlize = require('sequelize')

    

let sequelize = new Sequlize(process.env.HEROKU_POSTGRESQL_BRONZE_URL,{
    dialect:'postgres'


})

sequelize.authenticate().then(()=>console.log('Connected Successfully'))
.catch(()=> console.log('Trouble connecting to Mysql server'))

module.exports = sequelize




