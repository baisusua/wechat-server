'use strict';
const co = require('co');

module.exports = {
    up: co.wrap(function* (db, Sequelize) {
        const {
            INTEGER,
            DATE,
            STRING
        } = Sequelize;

        yield db.createTable('users', {
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
        yield db.createTable('tasks', {
            id: {
                type: INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            user_id: {
                type: INTEGER,
                references: {
                    model: 'users',
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
        yield db.createTable('sends', {
            id: {
                type: INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            content: STRING,
            user_id: {
                type: INTEGER,
                references: {
                    model: 'users',
                    key: 'id',
                },
                onUpdate: 'cascade',
                onDelete: 'cascade',
            },
            task_id: {
                type: INTEGER,
                references: {
                    model: 'tasks',
                    key: 'id',
                },
                onUpdate: 'cascade',
                onDelete: 'cascade',
            },
            created_at: DATE,
            updated_at: DATE
        });
        yield db.createTable('revices', {
            id: {
                type: INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            content: STRING,
            user_id: {
                type: INTEGER,
                references: {
                    model: 'users',
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
        yield db.dropTable('sends');
        yield db.dropTable('revices');
        yield db.dropTable('tasks');
        yield db.dropTable('users');
    }),
};