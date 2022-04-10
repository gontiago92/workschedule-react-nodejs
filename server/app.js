const express = require("express");
const cors = require("cors");
const app = express();
const { DataTypes } = require('sequelize')
const connection = require('./database/sqlite')

const UserModel = require('./database/User')
const User = UserModel(connection, DataTypes)

const EventModel = require('./database/Event')
const Event = EventModel(connection, DataTypes)

var whitelist = ['http://localhost:1234', 'http://127.0.0.1:1234', 'http://192.168.1.10:1234']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback('Not allowed by CORS')
    }
  }
}

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", async (req, res) => {

  const events = await Event.findAll();

  return res.send({events})

});


// set port, listen for requests
const PORT = process.env.PORT || 8080;

connection.sync().then(async req => {
  try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  
  const user = await User.findOne({ 
      where: { username: 'demo'} 
  })

  if(!user) {
    await User.create({username: 'demo', password: 'demo', email: 'demo@email.com', type: 'admin'})
    await Event.create({title: 'Job Interview', starting_at: new Date('2022-04-11T09:00:00'), ending_at: new Date('2022-04-11T10:00:00')})
    await Event.create({title: 'Work Hours', starting_at: new Date('2022-04-11T15:00:00'), ending_at: new Date('2022-04-11T23:59:00')})
    await Event.create({title: 'Another event', starting_at: new Date('2022-04-22T15:00:00'), ending_at: new Date('2022-04-22T23:59:00')})
    
    for(let i = 0; i < 40; i++) {
  
      let month = Math.floor(Math.random() * 12);
      if(month < 10)
        month = '0' + month
      let day = Math.floor(Math.random() * 28);
      if(day < 10)
        day = '0' + day

      let hours_from = Math.floor(Math.random() * 12);
      let hours_to = hours_from + Math.floor(Math.random() * 11);

      if(hours_from < 10)
        hours_from = '0' + hours_from
      if(hours_to < 10)
        hours_to = '0' + hours_to

      console.log(`2022-${month}-${day}T${hours_from}:00:00`)
      await Event.create({title: `Auto Gen. Event n° ${i}`, starting_at: new Date(`2022-${month}-${day}T${hours_from}:00:00`), ending_at: new Date(`2022-${month}-${day}T${hours_to}:59:00`)})
    }
    
  }
    

  app.listen(PORT, () => console.log('Listening on : http://127.0.0.1:%d', PORT));
})