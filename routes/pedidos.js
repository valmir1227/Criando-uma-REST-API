const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).send({
    mensagem: " GET pedidos!",
  });
});

router.post("/", (req, res, next) => {
  res.status(201).send({
    mensagem: "POST pedidos",
  });
});

router.post("/:id_produto", (req, res, next) => {
  const id = req.params.id_produto;

  if (id == "especial") {
    res.status(200).send({
      mensagem: "ID especial :  )",
      id: id,
    });
  } else {
    res.status(200).send({
      mensagem: "Você passou um ID",
    });
  }
});

router.patch("/", (req, res, next) => {
  res.status(201).send({
    mensagem: "PATH pedidos",
  });
});

router.delete("/", (req, res, next) => {
  res.status(201).send({
    mensagem: "DELETE Pedidos",
  });
});

module.exports = router;
