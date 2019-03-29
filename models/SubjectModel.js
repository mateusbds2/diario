const Subject = function(sequelize, DataTypes) {
    return sequelize.define(
        "subject",
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "O campo nome não pode ficar vazio"
                    }
                }
            },
            code: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "O campo código da matéria não pode ficar vazio"
                    }
                }
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "O campo descrição não pode ficar vazio"
                    }
                }
            },
            professorId: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            timestamps: false
        }
    );
};

module.exports = Subject;
