'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('News', [{
            title: "Music Composer Ai Kamachi Dies at 48",
            text: "Various media outlets reported on Monday that pianist and music composer Ai Kamachi died on May 30. She was 48. A private wake and farewell ceremony was held by the bereaved family.",
            source: "Oricon News",
            animeRef: ["Clannad: AfterStory", "Angel Beats!", "Charotte"],
            author: "Kingsman117",
            tags: ["Musician", "Life Event"],
            img: "https://scontent-eze1-1.xx.fbcdn.net/v/t1.0-9/103546353_3025913157493580_7457802794479045190_n.jpg?_nc_cat=103&_nc_sid=8bfeb9&_nc_ohc=qCdqgfMLeZYAX_Ne_jc&_nc_ht=scontent-eze1-1.xx&oh=c33ef2a7be1d2a9a92442d2d6264dcd2&oe=5F0539D0",
            link: "https://myanimelist.net/news/59971052",
            UserId: 1,
            relatedDbAnimes: ["Clannad"],
            relatesDbChara: [""],
            createdAt: new Date(),
            updatedAt: new Date()
        }])
    }
}


