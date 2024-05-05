import { TutorController } from "../../controllers/tutor.controller";
import { TutorImpl } from "../../services/impls/tutor.impl";

const tutorImpl = new TutorImpl();

export const tutorController = new TutorController(tutorImpl);
