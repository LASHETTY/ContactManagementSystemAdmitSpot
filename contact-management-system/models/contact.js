const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL);

const Contact = sequelize.define('Contact', {
    name: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING,
    timezone: DataTypes.STRING,
});

module.exports = Contact;
