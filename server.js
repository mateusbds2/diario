const express = require("express");
const router = require("./router");
const models = require("./models");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json("Hello World");
});

app.use("/", router);

app.listen(4000, () => {
    console.log("Servidor rodando na porta 4000");
});
