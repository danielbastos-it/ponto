module.exports = app => {
  app.get("/t", (req,res) => res.json({status: "Essa é a Minha API no T"}));
};
