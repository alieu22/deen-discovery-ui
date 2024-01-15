-- Step 1: Set Up MySQL Database

-- Create a MySQL database called `deen_app`
CREATE DATABASE deen_app;

-- Switch to the `deen_app` database
USE deen_app;

-- Create a table named `ThoughtOfTheDayTable` with columns `id` and `thought`
CREATE TABLE ThoughtOfTheDayTable (
    id INT PRIMARY KEY IDENTITY(1,1),
    thought VARCHAR(255) NOT NULL
);

-- Step 2: Populate Database

-- Insert some sample thoughts into the `ThoughtOfTheDayTable`
INSERT INTO ThoughtOfTheDayTable (thought) VALUES
('Be kind to others.'),
('Gratitude can transform common days into thanksgivings.'),
('Every day may not be good, but there is something good in every day.');
-- Add more thoughts as needed

-- Select all rows from the `ThoughtOfTheDayTable`
--SELECT * FROM ThoughtOfTheDayTable;