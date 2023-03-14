import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import studentRoutes from './routes/student.js'
import generalRoutes from './routes/general.js'
import studyRoutes from './routes/study.js'
import managementRoutes from './routes/management.js'
dotenv.config();
const app = express();
//make cross - origin sharing requests
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginEmbedderPolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//setup routes (4)
app.use("/student", studentRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/study", studyRoutes);
