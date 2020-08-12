const moment = require("moment")

module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define("Comments", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            notEmpty: true,
            validate: {
                notNull: {
                    msg: "Comments require a Title"
                }
            }
        },
        date: {
            type: DataTypes.STRING,
            defaultValue: moment().format("MM do LT")
        },
        author: {
            type: DataTypes.STRING,
            notEmpty: false,
            allowNull: false
        },
        text: {
            type: DataTypes.TEXT,
            notEmpty: true,
        }
    })
    Comment.associate = models => {
        Comment.belongsTo(models.User, {
            foreignKey: "userComment"
        })
        Comment.belongsTo(models.News, {
            foreignKey: "newsComment"
        })
        Comment.belongsTo(models.Articles, {
            foreignKey: "articleComment"
        })
    }

    return Comment
}