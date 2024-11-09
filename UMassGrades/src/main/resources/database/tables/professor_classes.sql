-- This script creates the professor_classes table with professor_id, class_id, and grades columns

CREATE TABLE professor_classes (
                                   professor_id INT NOT NULL,                    -- ID of the professor
                                   class_id INT NOT NULL,                        -- ID of the class
                                   grades JSONB,                                 -- JSONB column to store grades, e.g., {"A": 1, "A-": 3, ..., "D": 1, "F": 0}

                                   PRIMARY KEY (professor_id, class_id),         -- Composite primary key on professor_id and class_id
                                   FOREIGN KEY (professor_id) REFERENCES professors(professor_id),
                                   FOREIGN KEY (class_id) REFERENCES classes(class_id)
);
