const express = require("express")
const chalk = require("chalk")
const morgan = require("morgan")

const red = chalk.red

const app = express()

//importing DB
const db = require("./models")

//importing Routes
const animeRoute = require("./routes/api")
const studioRoute = require("./routes/studio")

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))

//Using Routes
app.use("/api/anime", animeRoute)
app.use("/api/studio", studioRoute)

const port = process.env.PORT || 4000

db.sequelize.sync().then(() =>
    app.listen(port, console.log(red(`Server is up on port ${port}`)))
)
    .catch(err => console.log(err))

