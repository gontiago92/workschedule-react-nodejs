module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define('Event', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        starting_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
        ending_at: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });

    Event.associate = (models) => {
        Event.belongsTo(models.User)
    }
  
    return Event;
  }