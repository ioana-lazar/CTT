-- init.sql

-- Create the database
-- CREATE DATABASE react;

-- Connect to the new database
\c react;

-- Create a table named 'pictures'
CREATE TABLE pictures (
  ID SERIAL PRIMARY KEY,
  image_data BYTEA,
  filename VARCHAR(255),
  description TEXT,
  category VARCHAR(25)
);

-- Row 1
INSERT INTO pictures(image_data, filename, description, category)
VALUES('https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg', 'Kitty standing', 'Standing Cat', 'normal');

-- Row 2
INSERT INTO pictures(image_data, filename, description, category)
VALUES('https://upload.wikimedia.org/wikipedia/commons/b/bc/Juvenile_Ragdoll.jpg', 'Juvenile Ragdoll', 'Juvenile Ragdoll', 'funny');

-- Row 3
INSERT INTO pictures(image_data, filename, description, category)
VALUES('https://upload.wikimedia.org/wikipedia/commons/2/23/Close_up_of_a_black_domestic_cat.jpg', 'Black domestic cat', 'Black domestic cat', 'funny');

-- Row 4
INSERT INTO pictures(image_data, filename, description, category)
VALUES('https://upload.wikimedia.org/wikipedia/commons/3/36/2006-07-09_katze2.jpg', 'Katze', 'Katze', 'funny');

-- Row 5
INSERT INTO pictures(image_data, filename, description, category)
VALUES('https://upload.wikimedia.org/wikipedia/commons/f/f3/Youngkitten.JPG', 'Young kitten', 'Young kitten', 'funny');

-- Row 6
INSERT INTO pictures(image_data, filename, description, category)
VALUES('https://upload.wikimedia.org/wikipedia/commons/6/62/Brown_Burmese_Cat_Headshot.jpg', 'Burmese Cat', 'Burmese Cat', 'funny');

-- Row 7
INSERT INTO pictures(image_data, filename, description, category)
VALUES('https://upload.wikimedia.org/wikipedia/commons/e/e8/Corfu_beach_27.JPG', 'Kitty standing', 'Standing Cat', 'normal');

-- Row 8
INSERT INTO pictures(image_data, filename, description, category)
VALUES('https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/14_years_old_american_shorthair.jpg/200px-14_years_old_american_shorthair.jpg', 'Shorthair', 'Shorthair', 'funny');

-- Row 9
INSERT INTO pictures(image_data, filename, description, category)
VALUES('https://upload.wikimedia.org/wikipedia/commons/5/51/Aegean_cat.jpg', 'Aegean Cat', 'Aegean Cat', 'normal');

-- Row 10
INSERT INTO pictures(image_data, filename, description, category)
VALUES('https://upload.wikimedia.org/wikipedia/commons/a/a7/Tiffanie_at_cat_show.jpg', 'Cat show', 'Cat show', 'normal');
