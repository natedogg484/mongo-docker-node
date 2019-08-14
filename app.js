const express = require('express')
const mongoose = require('mongoose')
const app = express();
const router = express.Router();
const db = require('/db');


const path = __dirname + '/public/';