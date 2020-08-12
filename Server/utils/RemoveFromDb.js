const sequelize = require("sequelize")

const removeFromDB = async (animeList, animeId) => {
    await animeList.update({
        watching: sequelize.fn("array_remove", sequelize.col("watching"), animeId),
        complete: sequelize.fn("array_remove", sequelize.col("complete"), animeId),
        onHold: sequelize.fn("array_remove", sequelize.col("onHold"), animeId),
        drop: sequelize.fn("array_remove", sequelize.col("drop"), animeId),
        planTo: sequelize.fn("array_remove", sequelize.col("planTo"), animeId)
    })
    console.log(animeList)
    return animeList
}

module.exports = removeFromDB;