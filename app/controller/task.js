'use strict';

const Controller = require('egg').Controller;

class TaskController extends Controller {
  async tasks() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.task.list(ctx.query);
  }
}

module.exports = TaskController;
