const express = require("express");
const { Subject } = require("../models/index");
const router = express.Router();

router.get("/cadeiras", (req, res) => {
    res.json({ msg: "cadeiras" });
});

router.post("/cadeiras/criar", (req, res) => {
    const { name, code, description } = req.body;

    Subject.create({ name, code, description })
        .then(subject => {
            res.json(subject);
        })
        .catch(err => {
            res.json(err);
        });
});

router.get("/cadeiras/ver/:id", (req, res) => {
    Subject.findOne({ where: { id: req.params.id } })
        .then(subject => {
            res.json(subject);
        })
        .catch(err => {
            res.json(err);
        });
});

router.post("/cadeiras/editar/:id", (req, res) => {
    const { name, code, description } = req.body;

    Subject.findOne({ where: { id: req.params.id } })
        .then(subject => {
            if (subject) {
                subject
                    .update({ name, code, description })
                    .then(subject => {
                        res.json(subject);
                    })
                    .catch(err => {
                        res.json(err);
                    });
            } else {
                res.json(null);
            }
        })
        .catch(err => {
            res.json(err);
        });
});

router.get("/cadeiras/excluir/:id", (req, res) => {
    Subject.findOne({ where: { id: req.params.id } })
        .then(subject => {
            if (subject) {
                subject
                    .destroy()
                    .then(subject => {
                        res.json(subject);
                    })
                    .catch(err => {
                        res.json(err);
                    });
            } else {
                res.json(null);
            }
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;
