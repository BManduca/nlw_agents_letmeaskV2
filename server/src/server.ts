import { fastifyCors } from "@fastify/cors";
import { fastify } from "fastify";
import {
	serializerCompiler,
	validatorCompiler,
	type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { env } from "./env.ts";
import { createQuestionRoute } from "./http/routes/create-question.ts";
import { createRoomRoute } from "./http/routes/create-rooms.ts";
import { getRoomQuestions } from "./http/routes/get-room-questions.ts";
import { getRoomsRoute } from "./http/routes/get-rooms.ts";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
	origin: "http://localhost:5173",
});

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

// rota health para verificar se esta rodando
app.get("/health", () => {
	return "OK";
});

app.register(getRoomsRoute);
app.register(createRoomRoute);
app.register(getRoomQuestions);
app.register(createQuestionRoute);

app.listen({ port: env.PORT });
