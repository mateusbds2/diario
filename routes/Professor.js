const express = require("express");
const router = express.Router();

router.get("/professores", (req, res) => {
    res.json({ msg: "professores" });
});

router.post("/professores/criar", (req, res) => {
    res.json({ msg: "professores" });
});

router.get("/professores/ver/:id", (req, res) => {
    res.json({ msg: "professores" });
});

router.post("/professores/editar/:id", (req, res) => {
    res.json({ msg: "professores" });
});

router.get("/professores/excluir/:id", (req, res) => {
    res.json({ msg: "professores" });
});

module.exports = router;
