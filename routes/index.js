module.exports = app => {
  app.get("/", (req,res) => res.json({status: "Essa é a Minha API"}));
};
