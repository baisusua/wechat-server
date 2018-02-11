'use strict';

const Controller = require('egg').Controller;

class SendController extends Controller {
  async sends() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.send.list(ctx.query);
  }
}

module.exports = SendController;
