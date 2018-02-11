'use strict';

const Service = require('egg').Service;

class Task extends Service {
    async list({
        offset = 0,
        limit = 10,
        order_by = 'created_at',
        order = 'ASC'
    }) {
        return this.ctx.model.Task.findAndCountAll({
            offset,
            limit,
            order: [
                [order_by, order.toUpperCase()]
            ],
        });
    }

    async find(id) {
        const task = await this.ctx.model.Task.findById(id);
        if (!task) {
            this.ctx.throw(404, 'task not found');
        }
        return task;
    }

    async create(task) {
        return this.ctx.model.Task.create(task);
    }

    async update({
        id,
        updates
    }) {
        const task = await this.ctx.model.Task.findById(id);
        if (!task) {
            this.ctx.throw(404, 'task not found');
        }
        return task.update(updates);
    }

    async del(id) {
        const task = await this.ctx.model.Task.findById(id);
        if (!task) {
            this.ctx.throw(404, 'task not found');
        }
        return task.destroy();
    }
}

module.exports = Task;