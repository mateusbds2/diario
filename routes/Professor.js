const express = require("express");
const { Professor, Activity, Subject } = require("../models/index");
const router = express.Router();

router.get("/professores", (req, res) => {
    Professor.findAll({ include: [Activity, Subject] })
        .then(professors => {
            res.json(professors);
        })
        .catch(err => {
            res.json(err);
        });
});

router.post("/professores/criar", (req, res) => {
    const { name, code } = req.body;

    Professor.create({ name, code })
        .then(professor => {
            res.json(professor);
        })
        .catch(err => {
            res.json(err);
        });
});

router.get("/professores/ver/:id", (req, res) => {
    Professor.findOne({
        where: { id: req.params.id },
        include: [Activity, Subject]
    })
        .then(professor => {
            res.json(professor);
        })
        .catch(err => {
            res.json(err);
        });
});

router.post("/professores/editar/:id", (req, res) => {
    const { name, code } = req.body;

    Professor.findOne({ where: { id: req.params.id } })
        .then(professor => {
            if (professor) {
                professor
                    .update({ name, code })
                    .then(professor => {
                        res.json(professor);
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

router.get("/professores/excluir/:id", (req, res) => {
    Professor.findOne({ where: { id: req.params.id } })
        .then(professor => {
            if (professor) {
                professor
                    .destroy()
                    .then(professor => {
                        res.json(professor);
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
