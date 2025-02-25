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
         OrderId: {
            type: Sequelize.STRING
         },
         transaction_status: {
            type: Sequelize.STRING
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
