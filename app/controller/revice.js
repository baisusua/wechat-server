'use strict';

const Controller = require('egg').Controller;

class ReviceController extends Controller {
  async revices() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.revice.list(ctx.query);
  }
}

module.exports = ReviceController;
