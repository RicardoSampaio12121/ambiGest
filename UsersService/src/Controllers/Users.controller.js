//import { AppDataSource } from "./data-source.ts"
//import { AppDataSource } from "./data-source"
//import { User } from "../entity/User"

exports.createUser = async (req, res) => {
    const AppDataSource =  require("../data-source")
    const User = require("../entity/User")

    const u = new User.User();
    u.firstName = "Ricardo"
    u.lastName = "Sampaio"
    u.age = 22

    await AppDataSource.AppDataSource.manager.save(u);
}

exports.getUser = (req, res) => {
    
}

exports.updateUser = (req, res) => {
    
}

exports.deleteUser = (req, res) => {
    
}