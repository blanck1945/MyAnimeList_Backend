
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
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
            notEmpty: true
        },
        season: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Spring",
            notEmpty: true
        },
        type: {
            type: DataTypes.STRING,
            allowNull: true,
            notEmpty: true
        },
        score: {
            type: DataTypes.FLOAT,
            defaultValue: 0,
        },
        userScore: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            defaultValue: []
        },
        episodes: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            notEmpty: true
        },
        licensor: {
            type: DataTypes.STRING,
            notEmpty: false,
        },
        sinopsis: {
            type: DataTypes.TEXT,
            notEmpty: false
        },
        genres: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            defaultValue: []
        },
        first: {
            type: DataTypes.STRING,
            allowNull: false,
            notEmpty: true
        },
        last: {
            type: DataTypes.STRING,
            allowNull: false,
            notEmpty: true
        },
        studio: {
            type: DataTypes.STRING,
            allowNull: false,
            notEmpty: true
        },
        source: {
            type: DataTypes.STRING,
            allowNull: true,
            notEmpty: true
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false,
            notEmpty: true
        },
        state: {
            type: DataTypes.STRING,
            defaultValue: ""
        },
        adaptation: {
            type: DataTypes.STRING,
            notEmpty: false,
            trim: true
        },
        prequel: {
            type: DataTypes.STRING,
            notEmpty: false,
            trim: true
        },
        favorites: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNullNull: false,
            defaultValue: []
        },
        members: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            notEmpty: false,
            defaultValue: []
        }
    });

    Anime.associate = models => {
        Anime.hasMany(models.Reviews, {
            foreingKey: {
                allowNull: false
            }
        })
    }

    return Anime
}
