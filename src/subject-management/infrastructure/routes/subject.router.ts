import express from 'express';
import { subjectController } from '../dependencies';

export const subjectManagementRouter = express.Router();

subjectManagementRouter.post('/', subjectController.create.bind(subjectController));
subjectManagementRouter.get('/:id', subjectController.get.bind(subjectController));
subjectManagementRouter.put('/:id', subjectController.update.bind(subjectController));
subjectManagementRouter.delete('/:id', subjectController.delete.bind(subjectController));
subjectManagementRouter.get('/', subjectController.getAll.bind(subjectController));
