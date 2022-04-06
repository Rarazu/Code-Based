const express = require(`express`)
const app = express()

app.use(express.json()) //membaca data request dgn tipe json

// call pelanggaran controller
let pelanggaranController = require("../controllers/pelanggaranController")

// call authorization
let authorization = require("../middlewares/authorization")

//endpoint get data pelanggaran
app.get("/", [authorization.authorization], pelanggaranController.getDataPelanggaran)

// endpoint find pelanggaran
app.post("/find", [authorization.authorization], pelanggaranController.findPelanggaran)

// endpoint add data pelanggaran
app.post("/", pelanggaranController.addDataPelanggaran)

// endpoint edit pelanggaran
app.put("/:id_pelanggaran", pelanggaranController.editDataPelanggaran)

// endpoint delete pelanggaran
app.delete("/:id_pelanggaran", pelanggaranController.deleteDataPelanggaran)

module.exports = app