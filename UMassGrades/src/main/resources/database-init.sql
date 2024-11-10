
drop table if exists classes cascade;
drop table if exists departments cascade;
drop table if exists professors cascade;
drop table if exists professor_classes cascade;

CREATE TABLE classes (
                         class_id SERIAL PRIMARY KEY,           -- Unique identifier for each class
                         class_name VARCHAR(100) NOT NULL,      -- Name of the class, required field
                         class_description TEXT                 -- Description of the class, optional field
);
CREATE TABLE departments (
                             department_id SERIAL PRIMARY KEY,         -- Unique identifier for each department
                             department_name VARCHAR(100) NOT NULL,    -- Name of the department, required field
                             class_id INT REFERENCES classes(class_id) -- Foreign key referencing class_id in the classes table
);
CREATE TABLE professors (
                              professor_id SERIAL PRIMARY KEY, -- Unique identifier for each professor
                              professor_name VARCHAR(100) NOT NULL -- Name of the professor, required field
);
CREATE TABLE professor_classes (
                                   professor_id INT NOT NULL,                    -- ID of the professor
                                   class_id INT NOT NULL,                        -- ID of the class
                                   grades JSONB,                                 -- JSONB column to store grades, e.g., {"A": 1, "A-": 3, ..., "D": 1, "F": 0}

                                   PRIMARY KEY (professor_id, class_id),         -- Composite primary key on professor_id and class_id
                                   FOREIGN KEY (professor_id) REFERENCES professors(professor_id),
                                   FOREIGN KEY (class_id) REFERENCES classes(class_id)
);

INSERT INTO professors  (
    professor_id, professor_name
) VALUES (1, 'Alex');


-- DROP TABLE IF EXISTS Course;
--
-- CREATE TABLE Course(
--                        id SERIAL,
--                        p_name VARCHAR(50),
--                        min DOUBLE PRECISION,
--                        max DOUBLE PRECISION,
--                        mean DOUBLE PRECISION,
--                        median DOUBLE PRECISION,
--                        s_dev DOUBLE PRECISION,
--                        PRIMARY KEY(id)
-- );
--
-- INSERT INTO Course(p_name, min, max, mean, median, s_dev)
-- VALUES('Fletcher Bisceps',73.808,97.578,75.874919,77.867033,2.725235);