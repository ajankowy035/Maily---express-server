const express = require('express');
require('./services/passport');

const PORT = process.env.PORT || 3000;

const app = express();

require('./routes/authRoutes')(app);

app.listen(PORT, ()=>{
    console.log('Your server is running on port 3000');
})