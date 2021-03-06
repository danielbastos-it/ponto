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
  const Tasks = sequelize.define("Tasks", {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    done: {
      type: DataType.BOOLEAN,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  }, {
    classMethods: {
      associate: (models) => {
        Tasks.belongsTo(models.Users);
      }
    }
  });
  return Tasks;
}
