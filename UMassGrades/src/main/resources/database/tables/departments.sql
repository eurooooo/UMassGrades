-- This script creates the departments table with department_id, department_name, and a foreign key class_id

CREATE TABLE departments (
                             department_id SERIAL PRIMARY KEY,         -- Unique identifier for each department
                             department_name VARCHAR(100) NOT NULL,    -- Name of the department, required field
                             class_id INT REFERENCES classes(class_id) -- Foreign key referencing class_id in the classes table
);
