const express = require("express")
const router = express.Router()
const db = require("./../models")

router.get("/", async (req, res) => {
    try {
        const studio = await db.Studio.findAll()

        res.send(studio)
    }
    catch (err) {
        res.status(404).send(err)
    }
})

router.get("/all", async (req, res) => {
    try {
        const studio = await db.Studio.findAll({
            include: [db.Anime]
        })
        res.send(studio)
    }
    catch (err) {
        res.status(404).send()
    }
})

router.get("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const studio = await db.Studio.findOne({
            where: {
                id
            },
            include: [db.Anime]
        })

        res.send(studio)
    }
    catch (err) {
        console.log(err)
        res.status(404).send(err)
    }
})

router.post("/", async (req, res) => {
    console.log("here")
    try {
        const studio = await db.Studio.create(req.body)

        res.status(201).send(studio)
    }
    catch (err) {
        console.log(err)
        res.status(404).send()
    }
})

router.put("/:id", async (req, res) => {
    const { id } = req.params

    try {
        const studio = await db.Studio.findByPk(id)

        studio.update(req.body)
        await studio.save()

        res.send({ msg: "Studio update complete" })
    }
    catch (err) {
        res.status(404).send(err)
    }
})

router.delete("/:id", async (req, res) => {
    const { id } = req.params

    try {
        const studio = await db.Studio.findByPk(id)
        studio.destroy()

        res.send({ msg: "Studio remove" })
    }
    catch (err) {
        res.status(404).send()
    }
})


module.exports = router;