const express = require("express")
const router = express.Router()
const sequelize = require("sequelize")
const Op = sequelize.Op
const db = require("./../models")

//Ruta que busca en la base de datos por nombre de Studio
router.get("/:studio", async (req, res) => {
    const { studio } = req.params
    try {
        const anime = await db.Anime.findAll({
            where: {
                studio: {
                    [Op.like]: '%' + studio + '%'
                }
            }
        })
        res.send(anime)
    }
    catch (err) {
        console.log(err)
        res.status(404).send(err)
    }
})





module.exports = router;