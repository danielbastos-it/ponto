module.exports = app => {
  app.get("/users", (req,res) => {
  res.json({
    users: [
      {nome: "Daniel"},
      {nome: "Fabiola"}
    ]
    });
  });
};
