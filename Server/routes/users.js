const express = require("express")
const router = express.Router()
const db = require("../models")
const { red } = require("../utils/chalkVariables")
const removeFromDB = require("../utils/RemoveFromDb")

router.get("/", async (req, res) => {
    try {
        const users = await db.User.findAll()

        res.send(users)
    }
    catch (err) {
        res.status(404).send(err)
    }
})

router.delete("/:id/:animeId", async (req, res) => {
    const { id, animeId } = req.params
    try {
        const animeList = await db.AnimeList.findOne({
            where: { UserId: id }
        })
        await removeFromDB(animeList, animeId)
        res.send("Remove complete")
    }
    catch (err) {
        res.status(404).send(err)
    }
})


module.exports = router;;