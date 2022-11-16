'use strict';
const {
  Model,
  Stage,
  Event
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StageEvent extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
      // define association here
      }
  }

  StageEvent.init({
    stage_event_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    stage_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Stage,
            key: 'stage_id'
        }
    },
    event_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Event,
            key: 'event_id'
        }
    }
  }, {
    sequelize,
    modelName: 'StageEvent',
    tableName: 'stage_events',
    timestamps: false
  });

  return StageEvent
}