### Schema

CREATE DATABASE ThreeSixty_DB;
USE ThreeSixty_DB;

CREATE TABLE costs
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
  status enum('queue','in progress','complete'),
	paint_cost float(7, 2),
	wood_rot float(7, 2),
	change_order float(7, 2),
	job_total float(7, 2),
	pm_cost float(7, 2),
	pm_percent float(7, 2),
	sales_cost float(7, 2),
	sales_percent float(7, 2),
	insurance_cost float(7, 2),
	insurance_percent float(7, 2),
	labor_est float(7, 2),
	labor_est_percent float(7, 2),
	material_est float(7, 2),
	material_est_percent float(7, 2),
	labor_actual float(7, 2),
	labor_actual_percent float(7, 2),
	material_actual float(7, 2),
	material_actual_percent float(7, 2),
	profit_budget float(7, 2),
	profit_budget_percent float(7, 2),
	profit_actual float(7, 2),
	profit_actual_percent float(7, 2),
	PRIMARY KEY (id)
);