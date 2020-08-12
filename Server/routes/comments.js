const express = require("express")
const router = express.Router()
const db = require("../models")

router.get("/news/:id", async (req, res) => {

    const { id } = req.params

    try {
        const comments = db.Comments.findAll({
            where: { newsComment: id }
        })

        console.log(comments)
        res.send(comments)
    }
    catch (err) {
        res.status(404).send(err)
    }
})



module.exports = router;