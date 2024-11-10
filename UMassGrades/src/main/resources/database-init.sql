

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
CREATE TABLE professor_classes (
                                   professor_id INT NOT NULL,                    -- ID of the professor
                                   class_id INT NOT NULL,                        -- ID of the class
                                   grades JSONB,                                 -- JSONB column to store grades, e.g., {"A": 1, "A-": 3, ..., "D": 1, "F": 0}

                                   PRIMARY KEY (professor_id, class_id),         -- Composite primary key on professor_id and class_id
                                   FOREIGN KEY (professor_id) REFERENCES professors(professor_id),
                                   FOREIGN KEY (class_id) REFERENCES classes(class_id)
);
CREATE TABLE professors (
                            professor_id SERIAL PRIMARY KEY, -- Unique identifier for each professor
                            professor_name VARCHAR(100) NOT NULL -- Name of the professor, required field
);
