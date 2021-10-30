const router = require('express').Router();
const withAuth = require('../../utils/auth');
const sequelize = require('../../config/connection');
const { Comment } = require('../../models');

module.exports =router;