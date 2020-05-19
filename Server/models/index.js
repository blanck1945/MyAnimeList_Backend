const Sequelize = require("sequelize")

const sequelize = new Sequelize('AnimeList', 'postgres', 'bianchi1933', {
    host: 'localhost',
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});

const db = [{
    Anime: sequelize.import("./anime"),
    Studio: sequelize.import("./studios")
}]

Object.keys(db).forEach((modelName) => {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize

module.exports = db;