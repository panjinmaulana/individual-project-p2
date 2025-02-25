"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
   class FavoriteMovie extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // define association here
      }
   }
   FavoriteMovie.init(
      {
         MovieId: DataTypes.INTEGER,
         UserId: DataTypes.INTEGER
      },
      {
         sequelize,
         modelName: "FavoriteMovie"
      }
   )
   return FavoriteMovie
}
