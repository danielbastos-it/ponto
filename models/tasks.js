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
  console.log("-----------------------------------------");
  console.log(sequelize);
  console.log("-----------------------------------------");
  console.log(DataType);
  const Tasks = sequelize.define("Tasks", {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    done: {
      type: sequelize.BOOLEAN,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  }, {
    classMethods: {
      associate: (models) => {
        Users.belongsTo(models.Users);
      }
    }
  });
  return Users;
}
