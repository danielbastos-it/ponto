var express =  require ('express');
var consign = require('consign');
const app = express();
//app.get("/", (req,res) => res.json({status: "Essa é a Minha API"}));

/*app.get("/users", (req,res) => {
  res.json({
    users: [
      {nome: "Daniel"},
      {nome: "Fabiola"}
    ]
    });
  });
*/
/* */

consign()
  .include("libs/config.js")
  .then("db.js")
  .then("libs/middlewares.js")
  .then("routes")
  .then("libs/boot.js")
  .into(app);
