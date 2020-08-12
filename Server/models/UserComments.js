module.exports = (sequelize, Datatypes) => {
    const UserComments = sequelize.define("UserComments", {
        userComments: {
            type: Datatypes.ARRAY(Datatypes.INTEGER),
            defaultValue: []
        },
        newsComments: {
            type: Datatypes.ARRAY(Datatypes.INTEGER),
            defaultValue: []
        },
        forumComments: {
            type: Datatypes.ARRAY(Datatypes.INTEGER),
            defaultValue: []
        },
    })
    UserComments.associate = models => {
        UserComments.belongsTo(models.User, {
            foreingKey: {
                allowNull: false,
                notEmpty: false
            }
        })
    }
    return UserComments

}