module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define("Reviews", {
        text: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Please enter a valid name"
                }
            },
            notEmpty: true,
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: new Date()
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: false,
            notEmpty: true
        },
        episodes: {
            type: DataTypes.INTEGER,
            allowNull: false,
            notEmpty: true
        }
    });
    Review.associate = models => {
        Review.belongsTo(models.User)
    }

    return Review
}

/*
   helpful: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
        Review.belongsTo(models.Anime)
        */