module.exports = app => {
    const {
        STRING,
        INTEGER,
        DATE
    } = app.Sequelize;

    const Revice = app.model.define('revice', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        content: STRING,
        user_id: INTEGER,
        created_at: DATE,
        updated_at: DATE
    });

    Revice.associate = function () {
        app.model.Revice.belongsTo(app.model.User, {
            foreignKey: 'user_id'
        });
    };
    return Revice;
};