'use strict';

const Service = require('egg').Service;

class Send extends Service {
    async list({
        offset = 0,
        limit = 10,
        order_by = 'created_at',
        order = 'ASC'
    }) {
        return this.ctx.model.Send.findAndCountAll({
            offset,
            limit,
            order: [
                [order_by, order.toUpperCase()]
            ],
        });
    }

    async find(id) {
        const send = await this.ctx.model.Send.findById(id);
        if (!send) {
            this.ctx.throw(404, 'send not found');
        }
        return send;
    }

    async create(send) {
        return this.ctx.model.Send.create(send);
    }

    async update({
        id,
        updates
    }) {
        const send = await this.ctx.model.Send.findById(id);
        if (!send) {
            this.ctx.throw(404, 'send not found');
        }
        return send.update(updates);
    }

    async del(id) {
        const send = await this.ctx.model.Send.findById(id);
        if (!send) {
            this.ctx.throw(404, 'send not found');
        }
        return send.destroy();
    }
}

module.exports = Send;