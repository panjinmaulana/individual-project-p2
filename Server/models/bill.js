"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
   class Bill extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // define association here
      }
   }
   Bill.init(
      {
         orderId: DataTypes.STRING,
         purchaseDate: DataTypes.DATE,
         email: DataTypes.STRING,
         transactionStatus: DataTypes.STRING,
         price: DataTypes.INTEGER,
         UserId: DataTypes.INTEGER
      },
      {
         sequelize,
         modelName: "Bill"
      }
   )
   return Bill
}
