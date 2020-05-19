const express = require("express")
const chalk = require("chalk")
const morgan = require("morgan")

const red = chalk.red

const app = express()

//importing DB
const models = require("./models/index")
console.log(models)
//importing Routes
const animeRoute = require("./routes/api")

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))

//Using Routes
app.use("/api/anime", animeRoute)

const port = process.env.PORT || 4000

models.sequelize.sync().then(() =>
    app.listen(port, console.log(red(`Server is up on port ${port}`)))
)
    .catch(err => console.log(err))

