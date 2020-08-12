const express = require("express")
const router = express.Router()
const sequelize = require("sequelize")
const db = require("../models")
const { red } = require("../utils/chalkVariables")
const removeFromDB = require("../utils/RemoveFromDb")

router.get("/:id/:animeId", async (req, res) => {
    const { id, animeId } = req.params
    try {
        const anime = await db.Anime.findAll()

        const updateList = (anime, animeId) => {
            const powerList = []
            Promise.all(anime.map(el => el.dataValues.id === parseInt(animeId) ? powerList.push(el) : null))
            powerList[0].dataValues.state = "watching"
            const finalList = Promise.all(anime.map(el => el.dataValues.id === powerList[0].dataValues.id ? powerList[0] : el))
            return finalList
        }

        const newList = await updateList(anime, animeId)

        res.send(newList)
    }
    catch (err) {
        console.log(err)
        res.status(404).send(err)
    }
})

router.post("/addNew", async (req, res) => {
    const { animeId, userId } = req.body
    try {
        const animeList = await db.AnimeList.findOne({
            where: { UserId: userId }
        })

        animeList.update({
            watching: sequelize.fn("array_append", sequelize.col("watching"), animeId)
        })

        res.send("Added to the Db")
    }
    catch (err) {
        res.status(404).send(err)
    }
})


router.post("/addWatching", async (req, res) => {
    const { animeId, userId } = req.body
    try {
        const animeList = await db.AnimeList.findOne({
            where: { UserId: userId }
        })
        await removeFromDB(animeList, animeId)

        await animeList.update({
            watching: sequelize.fn("array_append", sequelize.col("watching"), animeId)
        })

        res.send("Added to the Db")
    }
    catch (err) {
        res.status(404).send(err)
    }
})

router.post("/addComplete", async (req, res) => {
    const { animeId, userId } = req.body
    try {
        const animeList = await db.AnimeList.findOne({
            where: { UserId: userId }
        })
        await removeFromDB(animeList, animeId)

        await animeList.update({
            complete: sequelize.fn("array_append", sequelize.col("complete"), animeId),
        })
        res.send("Change watch for complete")
    }
    catch (err) {
        console.log(err)
        res.status(404).send(err)
    }
})

router.post("/addOnHold", async (req, res) => {
    const { animeId, userId } = req.body
    try {
        const animeList = await db.AnimeList.findOne({
            where: { UserId: userId }
        })

        await removeFromDB(animeList, animeId)

        await animeList.update({
            onHold: sequelize.fn("array_append", sequelize.col("onHold"), animeId),
        })

        res.send("Change watch for complete")
    }
    catch (err) {
        console.log(err)
        res.status(404).send()
    }
})

router.post("/addDrop", async (req, res) => {
    const { animeId, userId } = req.body
    try {
        const animeList = await db.AnimeList.findOne({
            where: { UserId: userId }
        })

        await removeFromDB(animeList, animeId)

        await animeList.update({
            drop: sequelize.fn("array_append", sequelize.col("drop"), animeId),
        })

        res.send("Change complete")
    }
    catch (err) {
        console.log(err)
        res.status(404).send()
    }
})

router.post("/addPlanTo", async (req, res) => {
    const { animeId, userId } = req.body
    try {
        const animeList = await db.AnimeList.findOne({
            where: { UserId: userId }
        })

        await removeFromDB(animeList, animeId)

        await animeList.update({
            planTo: sequelize.fn("array_append", sequelize.col("planTo"), animeId),
        })

        res.send("Change complete")
    }
    catch (err) {
        console.log(err)
        res.status(404).send()
    }
})

module.exports = router;