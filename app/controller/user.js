'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async users() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.user.list(ctx.query);
  }
}

module.exports = UserController;
