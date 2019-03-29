const Professor = function(sequelize, DataTypes) {
    return sequelize.define(
        "professor",
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            code: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            timestamps: false
        }
    );
};

module.exports = Professor;
