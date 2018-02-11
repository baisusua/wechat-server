'use strict';

module.exports = app => {
  app.router.get('/users', 'user.users');
  app.router.get('/tasks', 'task.tasks');
  app.router.get('/sends', 'send.sends');
  app.router.get('/revices', 'revice.revices');
};
