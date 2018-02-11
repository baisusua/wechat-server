module.exports = app => {
    const {
        STRING,
        INTEGER,
        DATE
    } = app.Sequelize;

    const User = app.model.define('user', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        w_user_name: STRING,
        w_nick_name: STRING,
        name: STRING,
        created_at: DATE,
        updated_at: DATE
    });

    User.isExistName = function* (username) {
        const user = yield this.findOne({
            where: {
                name: {
                    $eq: name
                }
            }
        });
        console.log(user);
        return user;
    }

    User.isExistWUserName = function* (w_user_name) {
        const user = yield this.findOne({
            where: {
                w_user_name: {
                    $eq: w_user_name
                }
            }
        });
        return user;
    }
    User.prototype.associate = function () {
        app.model.User.hasMany(app.model.task, {
            foreignKey: 'user_id'
        });
        app.model.User.hasMany(app.model.send, {
            foreignKey: 'user_id'
        });
        app.model.User.hasMany(app.model.revice, {
            foreignKey: 'user_id'
        });
    };
    return User;
};