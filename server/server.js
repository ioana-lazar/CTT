const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 3000;

// Use the cors middleware to enable CORS
app.use(cors());

const pool = new Pool({
    user: process.env.PGUSER || 'dev',
    host: process.env.PGHOST || 'mypostgres',
    database: process.env.PGDATABASE || 'react',
    password: process.env.PGPASSWORD || 'dev',
    port: process.env.PGPORT || 5432,
});

app.get('/picture-of-the-day', async (req, res) => {
    let client;
    try {
        // Use the connection from the pool
        client = await pool.connect();

        console.log('Connected to the database');

        // Execute the query
        const dbRes = await client.query('SELECT * from pictures');

        const randomEl = Math.floor(Math.random() * dbRes.rows.length);
        const respData = {
            ...dbRes.rows[randomEl],
            image_data: dbRes.rows[randomEl].image_data.toString('base64'),
        };

        // Send the response
        res.status(200).json(respData);
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        // Release the connection back to the pool
        if (client) {
            client.release();
        }
    }
});

app.get('/latest-pictures', async (req, res) => {
    let client;
    try {
        // Use the connection from the pool
        client = await pool.connect();

        console.log('Connected to the database');

        // Execute the query
        const dbRes = await client.query('SELECT * from pictures');

        const respData = dbRes.rows.map((obj) => obj.image_data.toString('base64'));

        // Send the response (only the first 10 elements, or the entire array if it has fewer than 10 elements)
        res.status(200).json(respData.slice(0, 10));
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        // Release the connection back to the pool
        if (client) {
            client.release();
        }
    }
});

app.get('/funny-pictures', async (req, res) => {
    let client;
    try {
        // Use the connection from the pool
        client = await pool.connect();

        console.log('Connected to the database');

        // Execute the query
        const dbRes = await client.query('SELECT * from pictures');

        const filteredArray = dbRes.rows.filter((obj) => obj.category === 'funny');
        const respData = filteredArray.map((obj) => obj.image_data.toString('base64'));

        // Send the response
        res.status(200).json(respData);
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        // Release the connection back to the pool
        if (client) {
            client.release();
        }
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// CREATE TABLE pictures (
//     ID SERIAL PRIMARY KEY,
//     image_data BYTEA,
//     filename VARCHAR(255),
//     description Text,
//     category VARCHAR(25)
//   );

// insert into pictures(image_data,filename,description,category) values('https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg', 'Kitty standing', 'Standing Cat', 'normal');
// insert into pictures(image_data,filename,description,category) values('https://upload.wikimedia.org/wikipedia/commons/b/bc/Juvenile_Ragdoll.jpg', 'Juvenile Ragdoll', 'Juvenile Ragdoll', 'funny');
// insert into pictures(image_data,filename,description,category) values('https://upload.wikimedia.org/wikipedia/commons/2/23/Close_up_of_a_black_domestic_cat.jpg', 'Black domestic cat', 'Black domestic cat', 'funny');
// insert into pictures(image_data,filename,description,category) values('https://upload.wikimedia.org/wikipedia/commons/3/36/2006-07-09_katze2.jpg', 'Katze', 'Katze', 'funny');
// insert into pictures(image_data,filename,description,category) values('https://upload.wikimedia.org/wikipedia/commons/f/f3/Youngkitten.JPG', 'Young kitten', 'Young kitten', 'funny');
// insert into pictures(image_data,filename,description,category) values('https://upload.wikimedia.org/wikipedia/commons/6/62/Brown_Burmese_Cat_Headshot.jpg', 'Burmese Cat', 'Burmese Cat', 'funny');
// insert into pictures(image_data,filename,description,category) values('https://upload.wikimedia.org/wikipedia/commons/e/e8/Corfu_beach_27.JPG', 'Kitty standing', 'Standing Cat', 'normal');
// insert into pictures(image_data,filename,description,category) values('https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/14_years_old_american_shorthair.jpg/200px-14_years_old_american_shorthair.jpg', 'Shorthair', 'Shorthair', 'funny');
// insert into pictures(image_data,filename,description,category) values('https://upload.wikimedia.org/wikipedia/commons/5/51/Aegean_cat.jpg', 'Aegean Cat', 'Aegean Cat', 'normal');
// insert into pictures(image_data,filename,description,category) values('https://upload.wikimedia.org/wikipedia/commons/a/a7/Tiffanie_at_cat_show.jpg', 'Cat show', 'Cat show', 'normal');
