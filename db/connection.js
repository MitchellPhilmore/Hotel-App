let mysql = require('mysql2'),
    Sequlize = require('sequelize')

let sequelize = new Sequlize('hotelphilmore','b2da697b19cba0','036891b4',{
    host:' us-cdbr-iron-east-01.cleardb.net',
    dialect:'mysql'


})

sequelize.authenticate().then(()=>console.log('Connected Successfully'))
.catch(()=> console.log('Trouble connecting to Mysql server'))

module.exports = sequelize




