const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

mongoose.connect("mongodb+srv://profvaguetti:OcLeV%404tl45@testesmongodb-4irx5.mongodb.net/omnistack?retryWrites=true&w=majority",
{
    useNewUrlParser : true,
    useUnifiedTopology : true
}
);

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3333);