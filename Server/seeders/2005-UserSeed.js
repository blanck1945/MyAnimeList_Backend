'use strict';
const moment = require("moment")

module.exports = {
    up: (queryInterface, Sequelize) => {
        const fields = [{
            username: "Gatica990",
            email: "gatica990@gmail.com",
            password: "bianchi1933",
            isPremium: false,
            gender: "Male",
            location: "Argentina",
            avatar: "https://pm1.narvii.com/6791/a8cd597ba0a7d911cd3da2059385745f24bf1acev2_hq.jpg",
            isAdmin: true,
            createdAt: new Date(),
            updatedAt: new Date()
        }]
        return queryInterface.bulkInsert('Users', fields, {})
    }
}