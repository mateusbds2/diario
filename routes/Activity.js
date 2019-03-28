const express = require("express");
const router = express.Router();

router.get("/atividades", (req, res) => {
    res.json({ msg: "atividades" });
});

router.post("/atividades/criar", (req, res) => {
    res.json({ msg: "atividades" });
});

router.get("/atividades/ver/:id", (req, res) => {
    res.json({ msg: "atividades" });
});

router.post("/atividades/editar/:id", (req, res) => {
    res.json({ msg: "atividades" });
});

router.get("/atividades/excluir/:id", (req, res) => {
    res.json({ msg: "atividades" });
});

module.exports = router;
