### Schema

CREATE DATABASE ThreeSixty_DB;
USE ThreeSixty_DB;

CREATE TABLE costs
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
  status enum('queue','in progress','complete'),
	paint_cost float(1000000, 2),
	wood_rot float(1000000, 2),
	change_order float(1000000, 2),
	job_total float(1000000, 2),
	job_total float(1000000, 2),
	pm_cost float(10000, 2),
	pm_% float(10000, 2),
	sales_cost float(10000, 2),
	sales_% float(10000, 2),
	insurance_cost float(10000, 2),
	insurance_% float(10000, 2),
	labor_est float(1000000, 2),
	labor_est% float(1000000, 2),
	material_est float(1000000, 2),
	material_est% float(1000000, 2),
	labor_actual float(1000000, 2),
	labor_actual% float(1000000, 2),
	material_actual float(1000000, 2),
	material_actual% float(1000000, 2),
	profit_budget float(1000000, 2),
	profit_budget% float(1000000, 2),
	profit_actual float(1000000, 2),
	profit_actual% float(1000000, 2),
	PRIMARY KEY (id)
);