const { Sequelize, DataTypes } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
    const Anime = sequelize.define("Anime", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Please Enter a valid Title"
                }
            },
            notEmpty: true
        },
        season: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Spring 2020",
            notEmpty: true
        },
        type: {
            type: DataTypes.STRING,
            allowNull: true,
            notEmpty: true
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            notEmpty: true
        }
    });

    return Anime
}
