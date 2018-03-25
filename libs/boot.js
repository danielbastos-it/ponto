module.exports = app => {
  app.listen(app.get("port"), () => {
        console.log(`Minha API - Porta ${app.get("port")}`);
  });
};
