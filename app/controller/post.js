module.exports = app => {
    return class PostController extends app.Controller {
        * index() {
            const posts = yield this.ctx.model.Post.findAll({
                attributes: ['id', 'user_id'],
                include: {
                    model: this.ctx.model.User,
                    as: 'user'
                },
                where: {
                    status: 'publish'
                },
                order: 'id desc',
            });

            this.ctx.body = posts;
        }

        * show() {
            const post = yield this.ctx.model.Post.findById(this.params.id);
            const user = yield post.getUser();
            post.setDataValue('user', user);
            this.ctx.body = post;
        }

        * destroy() {
            const post = yield this.ctx.model.Post.findById(this.params.id);
            yield post.destroy();
            this.ctx.body = {
                success: true
            };
        }
    }
}