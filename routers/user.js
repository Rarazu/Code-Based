const express = require(`express`)
const app = express()

app.use(express.json()) //membaca data request dgn tipe json

// call siswa controller
let userController = require("../controllers/userController")

const userValidator = require("../middlewares/userValidator")

let authorization = require("../middlewares/authorization")

//endpoint get data user
app.get("/", userController.getDataUser)

// endpoint find user
app.post("/find", [authorization.authorization], userController.findUser)

// endpoint add data user
app.post("/", [userValidator.validate], userController.addDataUser)

// endpoint edit user
app.put("/:id_user", userController.editDataUser)

// endpoint delete user
app.delete("/:id_user", userController.deleteDataUser)

app.post("/auth", userController.authentication)

module.exports = app