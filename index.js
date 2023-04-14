const express = require("express")
const app = express()
// const userRoute = require("./routes/paths.js")
const airbnbController = require("./controller");
const morgan = require("morgan")
//require('dotenv').config();
var cors = require('cors')

app.use(morgan("dev"))
app.use(cors({origin: '*'}))
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// app.use('/', userRoute)
app.use('/', airbnbController);

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Server listing at port: ${PORT} ...`)) // port
