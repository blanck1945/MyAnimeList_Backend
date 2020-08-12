module.exports = (sequelize, DataTypes) => {
    const AnimeList = sequelize.define("AnimeList", {
        watching: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: false,
            defaultValue: []
        },
        complete: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: false,
            defaultValue: []
        },
        onHold: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: false,
            defaultValue: []
        },
        drop: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: false,
            defaultValue: []
        },
        planTo: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: false,
            defaultValue: []
        },
    })
    AnimeList.associate = models => {
        AnimeList.belongsTo(models.User, {
            foreingKey: {
                name: "animeList",
                allowNull: false,
            }
        })
    }
    return AnimeList
}