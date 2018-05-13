const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    let Cost = sequelize.define('costs', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        paint_cost: {
            type: DataTypes.FLOAT(7, 2)
        },
        wood_rot: {
            type: DataTypes.FLOAT(7, 2)
        },
        change_order: {
            type: DataTypes.FLOAT(7, 2)
        },
        job_total: {
            type: DataTypes.FLOAT(7, 2)
        },
        pm_cost: {
            type: DataTypes.FLOAT(7, 2)
        },
        pm_percent: {
            type: DataTypes.FLOAT(7, 2)
        },
        sales_cost: {
            type: DataTypes.FLOAT(7, 2)
        },
        sales_percent: {
            type: DataTypes.FLOAT(7, 2)
        },
        insurance_cost: {
            type: DataTypes.FLOAT(7, 2)
        },
        insurance_percent: {
            type: DataTypes.FLOAT(7, 2)
        },
        labor_est: {
            type: DataTypes.FLOAT(7, 2)
        },
        labor_est_percent: {
            type: DataTypes.FLOAT(7, 2)
        },
        material_est: {
            type: DataTypes.FLOAT(7, 2)
        },
        material_est_percent: {
            type: DataTypes.FLOAT(7, 2)
        },
        labor_actual: {
            type: DataTypes.FLOAT(7, 2)
        },
        labor_actual_percent: {
            type: DataTypes.FLOAT(7, 2)
        },
        material_actual: {
            type: DataTypes.FLOAT(7, 2)
        },
        material_actual_percent: {
            type: DataTypes.FLOAT(7, 2)
        },
        profit_budget: {
            type: DataTypes.FLOAT(7, 2)
        },
        profit_budget_percent: {
            type: DataTypes.FLOAT(7, 2)
        },
        profit_actual: {
            type: DataTypes.FLOAT(7, 2)
        },
        profit_actual_percent: {
            type: DataTypes.FLOAT(7, 2)
        }
    });
    return Cost;
}