const { User } = require('../models');

const userData = [
    {
        username: 'sami',
        password: 'password1',
    },
    {
        username: 'sammy',
        password: 'password2',
    },
    {
        username: 'brody',
        password: 'password3',
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;