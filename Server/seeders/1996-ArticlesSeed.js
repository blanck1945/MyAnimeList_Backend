'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("Articles", [{
            title: "Bakemonogatari: Characterization Through Aberrations",
            subtitle: "A decade of exquisite storytelling began with five ordinary girls and their five extraordinary problems.",
            animeRef: ["Bakemonogatari, Monogatari"],
            text: "Imagine KonoSuba without its eccentric cast or Shingeki no Kyojin without its vast variety of characters. The comedy and story, respectively, can’t be conveyed without them. As a character’s personality and motives often act as a driving force in storytelling, characterization is a crucial factor for a successful anime. No matter how well the plot is written, or how impactful the animation and soundtrack are, if the characters are flat and bland, we no longer feel the empathy to care about their actions or emotions. The Monogatari Series executes this excellently by having characters’ identities extend beyond the characters themselves, driving the story in the form of aberrations that allow for complex growth throughout the series. This notion is especially clear in Bakemonogatari, the first installation of the series, when we are first introduced to a large portion of the main cast.",
            autthor: "Shymander",
            img: "https://cdn.myanimelist.net/s/common/uploaded_files/1588579068-d762c6e3123f62d77ceadd2121c09c70.jpeg",
            UserId: 1,
            spoiler: true,
            tags: ["analisis, light novel"],
            link: "https://myanimelist.net/featured/2327/Bakemonogatari__Characterization_Through_Aberrations",
            relatedArticles: [""],
            relatedDbAnimes: ["Bakemonogatari", "Monogatari Series: Second Season"],
            relatesDbChara: [""],
            createdAt: new Date(),
            updatedAt: new Date()
        }])
    }
}