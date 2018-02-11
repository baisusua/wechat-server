module.exports = app => {
    const {
        STRING,
        INTEGER,
        DATE
    } = app.Sequelize;

    const Send = app.model.define('send', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        content: STRING,
        user_id: INTEGER,
        task_id: INTEGER,
        created_at: DATE,
        updated_at: DATE
    });

    Send.associate = function () {
        app.model.Task.belongsTo(app.model.User, {
            foreignKey: 'user_id'
        });
        app.model.Task.belongsTo(app.model.Task, {
            foreignKey: 'task_id'
        });
    };
    return Send;
};