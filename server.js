let express = require('express'),
    path = require('path'),
    port = 3000 //process.env.PORT || 8080
    app = express(),
    bodyParser = require('body-parser'),
    exhb = require('express-handlebars'),
    model = require('./db/models.js'),
    {reviews,reservations} = require('./db/models.js')

   

    app.engine('handlebars',exhb({layout:'main'}))
    app.set('view engine', 'handlebars')

    app.use(bodyParser.urlencoded({extended:true}))
    app.use(bodyParser.json())



    app.get('/',(req,res)=>{
        res.render('index')
        //res.sendFile(path.join(__dirname + '/public/index.html'))
    })

    app.get('/reservation',(req,res)=>{
        res.render('reservation')
       // res.sendFile(path.join(__dirname + '/public/reservations.html'))
    })

    app.get('/api/reservation',(req,res)=>{
        reservations.findAll().then(data=>{
//res.render('allreservations',{reservation:data})       
             res.json(data)
          
           
        })
    })

    app.get('/api/reviews',(req,res)=>{
        reviews.findAll().then(data=>{
            res.json(data)
        })
    })

    app.get('/showreservations',(req,res)=>{
        res.render('allreservations')
    })

    app.get('/reviews',(req,res)=>{
        res.render('reviews')
    })

    
    app.post('/reservation',(req,res)=>{
        let {firstname,lastname,arrival,departure} = req.body
       // console.log(req.body)
          reservations.sync().then(()=>{
            return reservations.create({
                firstname:firstname,
                lastname:lastname,
                arrival:arrival,
                departure:departure
            })
        })
        res.redirect('/')
    })

    app.post('/reviews',(req,res)=>{
        let {comment,name} = req.body
        console.log(req.body)
        reviews.sync().then(()=>{
            return reviews.create({
                name:name,
                comment:comment
            })
        })
       res.redirect('/reviews')

    })

    app.listen(port,()=>console.log(`Server is running on port ${3000}`))