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
