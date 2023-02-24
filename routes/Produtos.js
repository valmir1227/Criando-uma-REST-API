const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).send({
    mensagem: "Retorna todos os produtos!",
  });
});

router.post("/", (req, res, next) => {
  const produto = {
    nome: req.body.nome,
    preco: req.body.preco,
  };

  res.status(201).send({
    mensagem: "Insere um produto",
    produtoCriado: produto,
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
    mensagem: "Pedido ALTERADO",
  });
});

router.delete("/", (req, res, next) => {
  res.status(201).send({
    mensagem: "Pedido EXCLUIDO",
  });
});

module.exports = router;
