let express = require(`express`)
let app = express()
let port = 3001

app.use(express.static(`public`))

let hbs = require(`hbs`)
app.set(`views`, `views`)
app.set(`view engine`, `hbs`)

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
})

app.get(`/`, (req, res)=>{
    res.render(`index`)
})

app.get(`/list`, (req, res)=>{
    res.render(`list`)
})

app.get(`/item`, (req, res)=>{
    res.render(`item`)
})

app.use((req, res)=>{
    res.status(404).render(`404`)
})