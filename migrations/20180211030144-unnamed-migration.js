'use strict';
const co = require('co');

module.exports = {
    up: co.wrap(function* (db, Sequelize) {
        const {
            INTEGER,
            DATE,
            STRING
        } = Sequelize;

        yield db.createTable('user', {
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
        yield db.createTable('task', {
            id: {
                type: INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            user_id: {
                type: INTEGER,
                references: {
                    model: 'user',
                    key: 'id',
                },
                onUpdate: 'cascade',
                onDelete: 'cascade',
            },
            type: INTEGER,
            template: STRING,
            created_at: DATE,
            updated_at: DATE
        });
        yield db.createTable('send', {
            id: {
                type: INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            content: STRING,
            user_id: {
                type: INTEGER,
                references: {
                    model: 'user',
                    key: 'id',
                },
                onUpdate: 'cascade',
                onDelete: 'cascade',
            },
            task_id: {
                type: INTEGER,
                references: {
                    model: 'task',
                    key: 'id',
                },
                onUpdate: 'cascade',
                onDelete: 'cascade',
            },
            created_at: DATE,
            updated_at: DATE
        });
        yield db.createTable('revice', {
            id: {
                type: INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            content: STRING,
            user_id: {
                type: INTEGER,
                references: {
                    model: 'user',
                    key: 'id',
                },
                onUpdate: 'cascade',
                onDelete: 'cascade',
            },
            created_at: DATE,
            updated_at: DATE
        });
    }),

    down: co.wrap(function* (db) {
        yield db.dropTable('send');
        yield db.dropTable('revice');
        yield db.dropTable('task');
        yield db.dropTable('user');
    }),
};