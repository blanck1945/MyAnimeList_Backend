const express = require("express")
const router = express.Router()
const validator = require("validator")
const db = require("../models")
const bcrypt = require("bcryptjs")
const passport = require("passport")

router.post("/signUp", async (req, res) => {

    const { username, email, password } = req.body

    const usernameV = validator.isEmpty(username)
    const emailV = validator.isEmail(email)
    const passV = validator.isLength(password, { min: 6 })

    if (usernameV || !emailV || !passV) {
        return res.status(404).send({ msg: "Upps something went wrong" })
    }

    try {
        const newPass = await bcrypt.hash(password, 8)
        const user = await db.User.create({
            username,
            email,
            password: newPass
        })
        const animeList = await db.AnimeList.create({
            UserId: user.id
        })


        res.status(201).send({ msg: "Register complete" })
    }
    catch (err) {
        console.log(err)
        res.status(404).send(err)
    }
})

router.post("/logIn", passport.authenticate("local"), async (req, res) => {
    try {
        const user = await db.User.findOne({
            where: { email: req.body.email }
        })

        if (!user) {
            return res.status(404).send("Upps, something went wrong")
        }

        const match = await bcrypt.compare(req.body.password, user.password)
        if (!match) {
            return res.status(404).send("Upps, something went wrong")
        }

        res.send(user)
    }
    catch (err) {
        res.status(404).send(err)
    }
})

module.exports = router;