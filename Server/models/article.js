const moment = require("moment")

module.exports = (sequelize, DataTypes) => {
    const Article = sequelize.define("Articles", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Article require a title"
                }
            },
            notEmpty: true
        },
        subtitle: {
            type: DataTypes.STRING,
            notEmpty: true,
            trim: true
        },
        animeRef: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true
        },
        date: {
            type: DataTypes.STRING,
            defaultValue: moment().format("MM Do LT")
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false,
            notEmpty: true
        },
        autthor: {
            type: DataTypes.STRING,
            allowNull: false,
            notEmpty: true
        },
        spoiler: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        relatedArticles: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            defaultValue: []
        },
        relatedDbAnimes: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            defaultValue: []
        },
        relatesDbChara: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            defaultValue: []
        },
        img: {
            type: DataTypes.STRING,
            allowNull: true
        },
        views: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        link: {
            type: DataTypes.STRING,
            notEmpty: false
        },
        tags: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            defaultValue: [],
            allowNull: false
        }
    })
    Article.associate = models => {
        Article.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
    }
    return Article
}