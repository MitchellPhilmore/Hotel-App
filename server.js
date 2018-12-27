let express = require('express'),
    path = require('path'),
    port = process.env.PORT || 3000,
    app = express(),
    bodyParser = require('body-parser'),
    exhb = require('express-handlebars'),
    mongoose = require('mongoose')

    //Create Mongodb connection

    let uri = 'mongodb://admin:mitch1987@ds161856.mlab.com:61856/hotelphilmore'

    //Model
    let Reservation = mongoose.model("Reservations",{
        firstname:String,
        lastname:String,
        arrival:String,
        departure:String
    })

    let Reviews = mongoose.model("Reviews",{
        name:String,
        comment:String
    })

    mongoose.connect(uri).then(()=>console.log('Connected')).catch(err=>console.log(JSON.stringify(err)))

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
        Reservation.find({},(err,data)=>{
            res.json(data)
          
           
        })
    })

    app.get('/api/reviews',(req,res)=>{
       Reviews.find({},(err,data)=>{
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

       let newReservation = {
        firstname:firstname,
        lastname:lastname,
        arrival:arrival,
        departure:departure
    }

    let newEntry = new Reservation(newReservation)
         newEntry.save().then(()=>{
             console.log('Saved!')
         })
         .catch(err=>console.log(JSON.stringify(err)))

         res.redirect("/")
         
        
        })
  


    app.post('/reviews',(req,res)=>{


       let {comment,name} = req.body

       let newComment = {
           name:name,
           comment:comment
       }

       let newEntry = new Reviews(newComment)

       newEntry.save().then(()=>console.log('Saved!'))
       .catch(err=>console.log(JSON.stringify(err)))
       
    
    })

    app.listen(port,()=>console.log(`Server is running on port ${3000}`))