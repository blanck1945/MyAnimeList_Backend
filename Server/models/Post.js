
module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define("Posts", {
        title: {
            type: DataTypes.STRING,
            alloNull: false,
            notEmpty: true
        },
        author: {
            type: DataTypes.STRING,
            alloNull: false,
            notEmpty: true
        },
        text: {
            type: DataTypes.TEXT,
            alloNull: false,
            notEmpty: true
        }
    });
    Posts.associate = models => {
        Posts.belongsTo(models.User, {
            foreingKey: {
                alloNull: false
            }
        })
    }
    return Posts
}

