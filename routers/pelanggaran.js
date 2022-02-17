const express = require(`express`)
const app = express()

app.use(express.json()) //membaca data request dgn tipe json

// call siswa controller
let pelanggaranController = require("../controllers/pelanggaranController")

//endpoint get data siswa
app.get("/", pelanggaranController.getDataPelanggaran)

// endpoint add data siswa
app.post("/", pelanggaranController.addDataPelanggaran)

// endpoint edit siswa
app.put("/:id_pelanggaran", pelanggaranController.editDataPelanggaran)

// endpoint delete siswa
app.delete("/:id_pelanggaran", pelanggaranController.deleteDataPelanggaran)

module.exports = app