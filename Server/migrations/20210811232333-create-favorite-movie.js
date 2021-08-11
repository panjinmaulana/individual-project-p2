"use strict"
module.exports = {
   up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable("FavoriteMovies", {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
         },
         MovieId: {
            type: Sequelize.INTEGER
         },
         posterUrl: {
            type: Sequelize.STRING
         },
         title: {
            type: Sequelize.STRING
         },
         overview: {
            type: Sequelize.STRING
         },
         releaseDate: {
            type: Sequelize.DATE
         },
         genre: {
            type: Sequelize.STRING
         },
         rating: {
            type: Sequelize.INTEGER
         },
         UserId: {
            type: Sequelize.INTEGER,
            references: {
               model: "Users",
               key: "id"
            },
            onUpdate: "cascade",
            onDelete: "cascade"
         },
         createdAt: {
            allowNull: false,
            type: Sequelize.DATE
         },
         updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
         }
      })
   },
   down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable("FavoriteMovies")
   }
}
