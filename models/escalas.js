module.exports = app => {
  return {
    findAll: (params, callback) => {
      return callback([
        {nome: "Daniel Bastos"},
        {nome: "Fabiola Sousa"}
      ]);
    }
  };
};

module.exports = (sequelize, DataType) => {
  const Escalas = sequelize.define("Escalas", {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    escala: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    horarios: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  }, {
    classMethods: {
      associate: (models) => {
        Escalas.belongsTo(models.Cargos);
      }
    }
  });
  return Escalas;
}
