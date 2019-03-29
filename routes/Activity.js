const express = require("express");
const { Activity, Professor } = require("../models/index");
const router = express.Router();

router.get("/atividades", (req, res) => {
    Activity.findAll()
        .then(activities => {
            res.json(activities);
        })
        .catch(err => {
            res.json(err);
        });
});

router.post("/atividades/criar", (req, res) => {
    const { description, grade, date, presence, professorId } = req.body;

    Activity.create({ description, grade, date, presence, professorId })
        .then(activity => {
            res.json(activity);
        })
        .catch(err => {
            res.json(err);
        });
});

router.get("/atividades/ver/:id", (req, res) => {
    Activity.findOne({ where: { id: req.params.id }, include: [Professor] })
        .then(activity => {
            res.json(activity);
        })
        .catch(err => {
            res.json(err);
        });
});

router.post("/atividades/editar/:id", (req, res) => {
    const { description, grade, date, presence, professorId } = req.body;

    Activity.findOne({ where: { id: req.params.id } })
        .then(activity => {
            if (activity) {
                activity
                    .update({ description, grade, date, presence, professorId })
                    .then(activity => {
                        res.json(activity);
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

router.get("/atividades/excluir/:id", (req, res) => {
    Activity.findOne({ where: { id: req.params.id } })
        .then(activity => {
            if (activity) {
                activity
                    .destroy()
                    .then(activity => {
                        res.json(activity);
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
