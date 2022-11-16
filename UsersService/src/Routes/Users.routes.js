module.exports = app => {
    const Users = require("../Controllers/Users.controller.js");

    app.post("/createUser", Users.createUser);

    app.get("/getUser", Users.getUser);

    app.put("/updateUser", Users.updateUser);

    app.delete("/deleteUser", Users.deleteUser);

}