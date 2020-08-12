
module.exports = (sequelize, Datatypes) => {
    const User = sequelize.define("User", {
        username: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Please enter a valid username"
                }
            },
            noEmpty: true,
            trim: true,
            unique: true
        },
        email: {
            type: Datatypes.STRING,
            allowNull: false,
            notEmpty: true,
            trim: true,
            isEmail: true,
            unique: true
        },
        password: {
            type: Datatypes.STRING,
            allowNull: false,
            notEmpty: true,
            trim: true
        },
        isPremium: {
            type: Datatypes.BOOLEAN,
            defaultValue: false
        },
        gender: {
            type: Datatypes.STRING,
            allowNull: true,
            notEmpty: false,
            defaultValue: ""
        },
        location: {
            type: Datatypes.STRING,
            allowNull: false,
            notEmpty: false,
            defaultValue: "",
            trim: true
        },
        avatar: {
            type: Datatypes.STRING,
            allowNull: true,
            notEmpty: false
        },
        isAdmin: {
            type: Datatypes.STRING,
            defaultValue: "",
        }
    });
    User.associate = models => {
        User.hasMany(models.Reviews, {
            foreingKey: {
                allowNull: false
            }
        }),
            User.hasMany(models.News, {
                foreingKey: {
                    allowNull: false
                }
            }),
            User.hasMany(models.Posts, {
                foreingKey: {
                    allowNull: false
                }
            }),
            User.hasMany(models.Comments, {
                foreingKey: {
                    allowNull: false
                }
            })
        User.hasOne(models.AnimeList)
    }
    return User
}