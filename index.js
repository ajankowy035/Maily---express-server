const express = require('express');
const mongoose = require('mongoose');

const keys = require('./config/keys');
require ('./models/User');
require('./services/passport');

const PORT = process.env.PORT || 3000;
mongoose.connect(`mongodb+srv://user1:${keys.MONGO_PASSWORD}@cluster0.w0kc4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true} )

const app = express();

require('./routes/authRoutes')(app);

app.listen(PORT, ()=>{
    console.log('Your server is running on port 3000');
})