const express = require("express")
const router = express.Router()
const db = require("./../models")

router.get("/", async (req, res) => {
    const anime = await db.Anime.findAll()

    res.send(anime)
})

router.get("/:id", async (req, res) => {
    const { id } = req.params

    try {
        const anime = await db.Anime.findByPk(id)

        res.send(anime)
    }
    catch (err) {
        console.log(err)
        res.status(404).send(err)
    }
})

router.get("/find/:id", async (req, res) => {
    const { id } = req.params

    try {
        const anime = await db.Anime.findAll({
            where: { StudioId: req.params.id },
            include: [db.Studio]
        })

        res.send(anime)
    }
    catch (err) {
        console.log(err)
        res.status(404).send()
    }
})

router.post("/", async (req, res) => {
    console.log(req.body)
    try {
        const anime = await db.Anime.create(req.body)

        res.status(201).send(anime)
    }
    catch (err) {
        console.log(err)
        res.status(404).send(err)
    }
})

router.put("/:id", async (req, res) => {
    const { id } = req.params
    console.log(req.body)
    try {
        const anime = await db.Anime.findByPk(id)

        if (!anime) {
            return res.status(404).send({ msg: "No Anime with that ID" })
        }
        anime.update(req.body)
        await anime.save()

        res.send({ msg: "Update complete" })
    }
    catch (err) {
        console.log(err)
        res.status(404).send(err)
    }
})

router.delete("/:id", async (req, res) => {
    const { id } = req.params

    try {
        const anime = await db.Anime.findByPk(id)
        anime.destroy()

        res.status(201).send({ msg: "Anime remove complete" })

    }
    catch (err) {
        console.log(err)
        res.status(404).send(err)
    }
})


module.exports = router;

