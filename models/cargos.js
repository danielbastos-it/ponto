

module.exports = (sequelize, DataType) => {
  const Cargos = sequelize.define("Cargos", {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    cargo: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  }, {
    classMethods: {
      associate: (models) => {
        Cargos.hasMany(models.Escalas);
      },
      associate: (models) => {
        Cargos.belongsTo(models.Users);
        }

    }
  });
  return Cargos;
}
