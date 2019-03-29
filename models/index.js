const SubjectModel = require("./SubjectModel");
const ProfessorModel = require("./ProfessorModel");
const ActivityModel = require("./ActivityModel");
const Sequelize = require("sequelize");
const sequelize = require("../config");

sequelize
    .sync({ force: false })
    .then(() => {
        console.log("Tabelas criadas com sucesso.");
    })
    .catch(err => {
        console.log(err);
    });

const Subject = SubjectModel(sequelize, Sequelize);
const Professor = ProfessorModel(sequelize, Sequelize);
const Activity = ActivityModel(sequelize, Sequelize);

Subject.belongsTo(Professor, {
    foreignKey: "professorId"
});
Professor.hasMany(Subject, {
    foreignKey: "professorId"
});
Professor.hasMany(Activity, {
    foreignKey: "professorId"
});

module.exports = {
    Subject,
    Professor,
    Activity
};
