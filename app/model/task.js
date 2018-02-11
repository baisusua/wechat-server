module.exports = app => {
    const {
        STRING,
        INTEGER,
        DATE
    } = app.Sequelize;

    const Task = app.model.define('task', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: INTEGER,
        type: INTEGER,
        template: STRING,
        created_at: DATE,
        updated_at: DATE
    });

    Task.associate = function () {
        app.model.Task.belongsTo(app.model.User, {
            foreignKey: 'user_id'
        });
    };
    return Task;
};