-- create_professors_table.sql
-- This script creates the professors table with professor_id and professor_name columns

CREATE TABLE professors (
                            professor_id SERIAL PRIMARY KEY, -- Unique identifier for each professor
                            professor_name VARCHAR(100) NOT NULL -- Name of the professor, required field
);
