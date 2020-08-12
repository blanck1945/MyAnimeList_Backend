const moment = require("moment")

module.exports = (sequelize, DataTypes) => {
    const News = sequelize.define("News", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            notEmpty: true
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false,
            notEmpty: true
        },
        source: {
            type: DataTypes.STRING,
            allowNull: null,
            notEmpty: true
        },
        animeRef: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
            notEmpty: true
        },
        tags: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        },
        img: {
            type: DataTypes.STRING,
            allowNull: true
        },
        date: {
            type: DataTypes.STRING,
            defaultValue: moment().format("MM Do LT")
        },
        link: {
            type: DataTypes.STRING,
            notEmpty: false
        },
        comments: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            defaultValue: []
        },
        relatesDbChara: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            defaultValue: []
        },
        relatedDbAnimes: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            defaultValue: []
        }
    })
    News.associate = models => {
        News.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
    }
    return News
}