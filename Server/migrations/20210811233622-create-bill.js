"use strict"
module.exports = {
   up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable("Bills", {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
         },
         orderId: {
            type: Sequelize.STRING
         },
         purchaseDate: {
            type: Sequelize.DATE
         },
         email: {
            type: Sequelize.STRING
         },
         transactionStatus: {
            type: Sequelize.STRING
         },
         price: {
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
      await queryInterface.dropTable("Bills")
   }
}
