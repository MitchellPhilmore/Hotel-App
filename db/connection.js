let mysql = require('mysql2'),
    Sequlize = require('sequelize')

let sequelize = new Sequlize('heroku_76721893dce23b8','b2da697b19cba0','036891b4',{
    host:'mysql://b2da697b19cba0:036891b4@us-cdbr-iron-east-01.cleardb.net/',
    dialect:'mysql'


})

sequelize.authenticate().then(()=>console.log('Connected Successfully'))
.catch(()=> console.log('Trouble connecting to Mysql server'))

module.exports = sequelize




