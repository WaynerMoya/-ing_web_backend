const express = require('express');
const port = process.env.PORT || 3001;
var cors = require('cors')


//import database
require('./database/db')

// import all routers
const bonus = require('./routes/bonus')
const user = require('./routes/user')

const app = express();

app.use(cors())

app.use( express.json())


// user all routers
app.use('/bonus' , bonus);
app.use('/user' , user );

//listening application
app.listen( port , () => {
    console.log('listening on port ' + port );
})

