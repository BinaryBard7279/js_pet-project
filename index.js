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
    res.send(`dfgd`)
})