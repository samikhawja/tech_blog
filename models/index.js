const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
});
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
});
Post.belongTo(User, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
});
User.hasMany(Comment, {
    foreignKey: 'user_id',
});
User.hasMany(Post, {
    foreignKey: 'user_id',
});

module.exports = { Comment, Post, User };