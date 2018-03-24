module.exports = app => {
  app.listen(app.get("port"), () => {
        console.log(`Minha API - Port ${app.get("port")}`);
  });
};
