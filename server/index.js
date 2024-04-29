import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

//components
import Connection from './database/db.js';
import Router from './routes/route.js';
import path from "path";
// const path = require("path");

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);

// const _dirname = path.dirname("");
// const buildpath = path.join(_dirname,"../client/build")
// app.use(express.static(buildpath));

const PORT = 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;


Connection(username, password);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));