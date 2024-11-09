-- This script creates the classes table with class_id, class_name, and class_description columns

CREATE TABLE classes (
                         class_id SERIAL PRIMARY KEY,           -- Unique identifier for each class
                         class_name VARCHAR(100) NOT NULL,      -- Name of the class, required field
                         class_description TEXT                 -- Description of the class, optional field
);
