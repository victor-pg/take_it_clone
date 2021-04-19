const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const News = sequelize.define('News', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imgUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'news'
});

await News.sync();

module.exports=News;