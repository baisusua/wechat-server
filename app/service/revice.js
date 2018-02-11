'use strict';

const Service = require('egg').Service;

class Revice extends Service {
    async list({
        offset = 0,
        limit = 10,
        order_by = 'created_at',
        order = 'ASC'
    }) {
        return this.ctx.model.Revice.findAndCountAll({
            offset,
            limit,
            order: [
                [order_by, order.toUpperCase()]
            ],
        });
    }

    async find(id) {
        const revice = await this.ctx.model.Revice.findById(id);
        if (!revice) {
            this.ctx.throw(404, 'revice not found');
        }
        return revice;
    }

    async create(revice) {
        return this.ctx.model.Revice.create(revice);
    }

    async update({
        id,
        updates
    }) {
        const revice = await this.ctx.model.Revice.findById(id);
        if (!revice) {
            this.ctx.throw(404, 'revice not found');
        }
        return revice.update(updates);
    }

    async del(id) {
        const revice = await this.ctx.model.Revice.findById(id);
        if (!revice) {
            this.ctx.throw(404, 'revice not found');
        }
        return revice.destroy();
    }
}

module.exports = Revice;