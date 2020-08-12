require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const passport = require("passport")
const cookieParser = require("cookie-parser")
const session = require("express-session")
const { red } = require("./utils/chalkVariables")

const app = express()

//importing DB
const db = require("./models")

//importing Routes
const animeRoute = require("./routes/api")
const searchRoute = require("./routes/studio")
const signRoute = require("./routes/UserRoute")
const animeListRoute = require("./routes/animeList")
const usersRoute = require("./routes/users")
const reviewRouter = require("./routes/reviews")
const newsRouter = require("./routes/News")
const commentRouter = require("./routes/comments")

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan("dev"))
app.use(cors())
app.use(cookieParser(process.env.SECRET))
app.use(session({
    secret: process.env.EXPRESS_SECRET,
    resave: true,
    saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())

//Using Routes
app.use("/api/anime", animeRoute)
app.use("/api/searchQuery", searchRoute)
app.use("/api/sign", signRoute)
app.use("/api/animeList", animeListRoute)
app.use("/api/users", usersRoute)
app.use("/api/review", reviewRouter)
app.use("/api/news", newsRouter)
app.use("/api/comments", commentRouter)

const port = process.env.PORT || 4000

db.sequelize.sync().then(() =>
    app.listen(port, console.log(red(`Server is up on port ${port}`)))
)
    .catch(err => console.log(err))

