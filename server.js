const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const bodyParser = require('body-parser');
const app = express();
const passport = require('passport');

const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

//DB Config
const db = require('./config/keys').mongoURI;

// Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Use Poutes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);
app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true
  })
);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
