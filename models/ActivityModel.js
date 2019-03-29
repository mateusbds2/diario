const Activity = function(sequelize, DataTypes) {
    return sequelize.define(
        "activity",
        {
            description: {
                type: DataTypes.STRING,
                allowNull: false
            },
            grade: {
                type: DataTypes.FLOAT
            },
            date: {
                type: DataTypes.DATE,
                allowNull: false
            },
            presence: {
                type: DataTypes.BOOLEAN,
                allowNull: false
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

module.exports = Activity;
