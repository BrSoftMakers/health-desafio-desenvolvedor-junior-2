module.exports = app => {
  const cadastros = require("../controllers/cadastros.controller.js");

  var router = require("express").Router();

  // Create
  router.post("/", cadastros.create);

  //todos os cadastros
  router.get("/", cadastros.findAll);

  // Recupere um único cadastros com id
  router.get("/:id", cadastros.findOne);

  // Atualizar um cadastros com id
  router.put("/:id", cadastros.update);

  // Excluir um cadastro com id
  router.delete("/:id", cadastros.delete);

  // Excluir todos os cadastros
  router.delete("/", cadastros.deleteAll);

  app.use("/api/cadastros", router);
};
