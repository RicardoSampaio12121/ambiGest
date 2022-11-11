import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
const express = require("express");

const app = express();

AppDataSource.initialize().catch(error => console.log(error))

require("./routes/credentials.routes")(app);

var listener = app.listen(8888, function() {
    console.log('Listening on port ' + listener.address().port);
})