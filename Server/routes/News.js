const express = require("express")
const router = express.Router()
const db = require("../models")

router.get("/", async (req, res) => {
    try {
        const news = await db.News.findAll()

        res.send(news)
    }
    catch (err) {
        res.status(404).send()
    }
})

router.post("/:id", async (req, res) => {
    const { id } = req.params
    const { title, text, source, animeRef, author, tags, img, link } = req.body
    try {
        const news = await db.News.create({
            title,
            text,
            source,
            animeRef: [animeRef],
            author,
            tags: [tags],
            img,
            link,
            UserId: id
        })

        res.send(news)
    }
    catch (err) {
        console.log(err)
        res.status(404).send()
    }
})

router.get("/articles", async (req, res) => {
    try {
        const article = await db.Articles.findAll()

        res.send(article)
    }
    catch (err) {
        res.status(404).send()
    }
})

router.post("/article/:id", async (req, res) => {
    const { id } = req.params
    const { title, text, spoiler, related, author, img } = req.body
    try {
        const article = await db.Articles.create({
            title,
            text,
            autthor: author,
            spoiler,
            related: [related],
            img,
            UserId: id
        })

        res.send(article)
    }
    catch (err) {
        console.log(err)
        res.status(404).send()
    }
})


module.exports = router;