const express = require("express")
const chalk = require("chalk")

const red = chalk.red

const app = express()

const port = process.env.PORT || 4000

app.listen(port, console.log(red(`Server is up on port ${port}`)))