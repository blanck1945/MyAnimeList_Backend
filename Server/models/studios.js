
module.exports = (sequelize, DataTypes) => {
    const Studio = sequelize.define("Studio", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Please enter a valid name"
                }
            },
            notEmpty: true,

        },
    });
    Studio.associate = models => {
        Studio.hasMany(models.Anime)
    }
    return Studio
}

