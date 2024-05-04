import express from 'express';
import dotenv from 'dotenv';
import { Signale } from 'signale';
import morgan from 'morgan';

import { subjectManagementRouter } from './subject-management/infrastructure/routes/subject.router';
import syncConnection from './subject-management/infrastructure/mysql/connection';

const app = express();
const logger = new Signale();

dotenv.config();
app.use(express.json());
app.use(morgan('dev'));
const PORT = process.env.PORT || 3000;
const API_PREFIX = process.env.API_PREFIX || '/api/v1';

app.use(`${API_PREFIX}/subject`, subjectManagementRouter);

async function startServer() {
    await syncConnection();
    app.listen(PORT, () => {
        logger.success(`Server running on http://localhost:${PORT}${API_PREFIX}`);
    });
}

startServer();
