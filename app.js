const express = require("express");
const app = express();

const rotaProdutos = require("./routes/Produtos");
const rotaPedidos = require("./routes/pedidos");

app.use("/produtos", rotaProdutos);
app.use("/pedidos", rotaPedidos);

module.exports = app;
