import express from "express"
import { DatabaseSync } from 'node:sqlite';
import {readdir, open} from "node:fs/promises"
import {basename} from "node:path"

const data_path = "data/gene2brain_ulysses/"
const files_all = await readdir(data_path + "csv")
const files = files_all
// const csv_path = data_path + "csv/";



// const database = new DatabaseSync('sqlite.db');

// Execute SQL statements from strings.
// database.exec(`DROP TABLE data`)
// database.exec(`
// CREATE TABLE IF NOT EXISTS data(
// key TEXT PRIMARY KEY,
// value BLOB
// ) STRICT
// `);



// Create a prepared statement to insert data into the database.

// const file_content = await Promise.all(files.map(file => open(csv_path + file).then(fileHandle => fileHandle.readFile().then(contents => (fileHandle.close(), {file: basename(file, '.csv'), contents})))));


// const insert = database.prepare('INSERT INTO data (key, value) VALUES (?, ?)');
// file_content.forEach(({file, contents}) => insert.run(file, contents))

const all = files.map(file => basename(file, '.csv'))

const app = express()

app.get('/genes', async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "*");

    res.json(all)
});

app.use(express.static('data/gene2brain_ulysses'))

app.listen(3000, () => {
  console.log("started")
})
