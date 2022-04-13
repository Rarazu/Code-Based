const express = require(`express`)
const app = express()
const PORT = 8000
const cors = require(`cors`)
app.use(cors())
app.use(express.static(__dirname))

// prefix = imbuan endpoint
let routes = [
    {prefix: `/siswa`, route: require(`./routers/siswa`)},
    {prefix: `/user`, route: require(`./routers/user`)},
    {prefix: `/pelanggaran`, route: require(`./routers/pelanggaran`)},
    {
        prefix: `/pelanggaran_siswa`, 
        route: require(`./routers/pelanggaran_siswa`)
    }
]

for (let i = 0; i < routes.length; i++) {
    app.use(routes[i].prefix, routes[i].route)
}

app.listen(PORT, () => {
    console.log(`Server run on port ${PORT}`)
})