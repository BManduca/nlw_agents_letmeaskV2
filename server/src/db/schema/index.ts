// Barrel File => Um arquivo aonde, re-exportar todos os arquivos presentes no schema

import { questions } from "./questions.ts";
import { rooms } from "./rooms.ts";

export const schema = {
	rooms,
	questions,
};
