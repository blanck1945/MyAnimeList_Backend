const express = require("express")
const router = express.Router()
const db = require("./../models")
const { fillData } = require("../utils/refill")
const { red, green } = require("../utils/chalkVariables")

router.get("/", async (req, res) => {
    const anime = await db.Anime.findAll()

    res.send(anime)
})

router.get("/userAnimeList/:id", async (req, res) => {
    const { id } = req.params
    try {
        const animeList = await db.AnimeList.findAll({
            where: { UserId: id }
        })
        const anime = await db.Anime.findAll()
        const copy = anime

        const alterState = (copy, animeList) => {
            Promise.all(copy.filter(el => animeList[0].watching.map(item => item === el.id ? el.state = "watching" : el)))
            Promise.all(copy.filter(el => animeList[0].onHold.map(item => item === el.id ? el.state = "onHold" : el)))
            Promise.all(copy.filter(el => animeList[0].complete.map(item => item === el.id ? el.state = "complete" : el)))
            Promise.all(copy.filter(el => animeList[0].drop.map(item => item === el.id ? el.state = "drop" : el)))
            Promise.all(copy.filter(el => animeList[0].planTo.map(item => item === el.id ? el.state = "planTo" : el)))
            return copy
        }

        const copyList = await alterState(copy, animeList)
        //const filterList = await copyList.filter((item, index) => { return copyList.indexOf(item) === index })
        const orderCopy = copyList.sort((a, b) => {
            return a.dataValues.id - b.dataValues.id
        })
        res.send(orderCopy)
    }
    catch (err) {
        console.log(err)
        res.status(404).send(err)
    }
})

router.get("/:id", async (req, res) => {
    try {
        const animeList = await db.AnimeList.findOne({
            where: { UserId: req.params.id }
        })
        const anime = await db.Anime.findAll()

        const newList = await fillData(animeList)
        newList.map(el => el[0].dataValues.state = "watching")
        //newList.map(el => console.log({ ...el }))
        res.send(...newList)
    }
    catch (err) {
        console.log(err)
        res.status(404).send(err)
    }
})

router.get("/:season", async (req, res) => {
    try {
        const anime = await db.Anime.findAll({
            where: { season: req.params.season }
        })

        res.send(anime)
    }
    catch (err) {
        res.status(404).send()
    }
})

router.get("/season/:year", async (req, res) => {
    try {
        const anime = await db.Anime.findAll({
            where: { year: req.params.year }
        })

        res.send(anime)
    }
    catch (err) {
        res.status(404).send(err)
    }
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
    const { title, year, season, type, img,
        licensor, text, genres, first, last,
        studio, source, adaptation, prequel } = req.body
    try {

        const titleV = await db.Anime.findOne({
            where: { title }
        })

        if (titleV) {
            console.log(red("Anime Already exist"))
            return res.status(404).send("Anime Already exist")
        }

        const anime = await db.Anime.create({
            title,
            year,
            season,
            type,
            licensor,
            sinopsis: text,
            genres: [genres],
            first,
            last,
            studio,
            source,
            img,
            adaptation,
            prequel
        })



        res.status(201).send(anime)
    }
    catch (err) {
        console.log(err)
        res.status(404).send(err)
    }
})

router.put("/:id", async (req, res) => {
    const { id } = req.params
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

