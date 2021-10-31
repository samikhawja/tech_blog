const { Post } = require('../models');

const postData = [
    {
        title: 'HTML',
        content: 'The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.',
        user_id: 1,
    },
    {
        title: 'CSS',
        content: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.',
        user_id: 2,
    },
    {
        title: 'Javascript',
        content: 'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled and multi-paradigm. It has dynamic typing, prototype-based object-orientation and first-class functions.',
        user_id: 3,
    },
    {
        title: 'Node.js',
        content: 'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.',
        user_id: 2,
    },
    {
        title: 'MySQL',
        content: 'MySQL is an open-source relational database management system.',
        user_id: 1,
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;