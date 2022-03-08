const express = require(`express`)
const app = express()

app.use(express.json()) //membaca data request dgn tipe json

// call siswa controller
let userController = require("../controllers/userController")

const userValidator = require("../middlewares/userValidator")

//endpoint get data siswa
app.get("/", userController.getDataUser)

// endpoint add data siswa
app.post("/", [userValidator.validate], userController.addDataUser)

// endpoint edit siswa
app.put("/:id_user", userController.editDataUser)

// endpoint delete siswa
app.delete("/:id_user", userController.deleteDataUser)

app.post("/auth", userController.authentication)

module.exports = app