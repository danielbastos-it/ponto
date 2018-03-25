module.exports = app => {
  app.db.sequelize.sync().done(() => {
    app.listen(app.get("port"), () => {
      console.log(`Minha API - Porta ${app.get("port")}`);
    });
  });
};
