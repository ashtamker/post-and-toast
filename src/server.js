const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const postRoutes = require('./routes/posts.route'); 

const app = express();
const path = require('path');
app.use(cors());

app.use('/posts', postRoutes);
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

const CONNECTION_URL = 'mongodb+srv://or_ashi9:or123456@cluster0.2afuj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const port = process.env.port || 8000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(port, () => console.log(`Server started on port ${port}`)))
.catch((error) => console.log(error.message));



if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('client/build'));
  
    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

  
// app.listen(process.env.PORT || port , () =>{
//     console.log(`Server started on port ${port}`)
// });
