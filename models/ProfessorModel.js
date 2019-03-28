const Professor = function(sequelize, DataTypes) {
    return sequelize.define(
        "Professor",
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            code: {
                type: DataTypes.STRING,
                allowNull: false
            },
            subjectId: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            timestamps: false
        }
    );
};

module.exports = Professor;
