module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("Comments", [{
            title: "Farewell",
            author: "Gatica990",
            text: "Great composer, great music, deep lost",
            newsComment: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            title: "Bakemonogatari",
            author: "Gatica990",
            text: "Hanekawa best girl",
            articleComment: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        }])
    }
}