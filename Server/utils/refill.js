const db = require("../models")

const refillList = (animeList, anime) => {
    anime.map(el => el.id === animeList.dataValues.watching ? animeList.dataValues : el)
    return anime
}

const fillData = animeList => {
    const watch = "watching"
    return Promise.all(animeList.map(el => db.Anime.update(
        { state: watch }, { where: { id: el } })))
}

const replaceData = async animeList => {
    const allAnime = await db.Anime.findAll()
    if (animeList.length === 0) {
        return allAnime
    } else {
        const finalList = []
        Promise.all(allAnime.map(anime => animeList.map(el => el[0].dataValues.id === anime.dataValues.id ? finalList.push(el[0]) : finalList.push(anime))))
        const send = [...new Set(finalList.dataValues.title)]
        const sendArray = Array(sen)
        const send2 = await finalList.filter((item, index) => { return finalList.indexOf(item) === index })
        //const send3 = await send2.find(el => { return el.dataValues.title })
        //finalList.filter(el => el.dataValues.id === idList)
        console.log(send2[6])
        return send2
        //return Promise.all(animeList.map(el => allAnime.map(anime => anime.dataValues.id === el[0].dataValues.id ? el : anime)))
    }
}

const removeDuplicate = (array) => {
    return array.filter((a, b) => a.dataValues.id === b.dataValues.id)
}

module.exports = {
    refillList,
    fillData,
    replaceData
}