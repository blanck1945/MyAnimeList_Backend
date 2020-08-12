const express = require("express")
const router = express.Router()
const db = require("../models")

router.get("/:id", async (req, res) => {
    try {
        const review = await db.Reviews.findAll({
            where: { UserId: req.params.id },
            include: [db.User]
        })

        res.send(review)
    }
    catch (err) {
        res.status(404).send(err)
    }
})

router.post("/:id", async (req, res) => {
    try {
        const match = await db.Reviews.findOne({
            where: { UserId: req.params.id }
        })
        if (match) {
            return res.status(400).send("You already post a review for this Anime")
        }
        console.log("We reach here")

        const review = await db.Reviews.create({
            text: req.body.text,
            score: req.body.score,
            episodes: req.body.episodes,
            UserId: req.params.id
        })

        res.status(201).send(review)
    }
    catch (err) {
        res.status(404).send(err)
    }
})

module.exports = router;