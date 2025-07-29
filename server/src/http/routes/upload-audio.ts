import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import { z } from "zod/v4";
import { db } from "../../db/connection.ts";
import { schema } from "../../db/schema/index.ts";
import { generateEmbeddings, transcribeAudio } from "../../services/gemini.ts";

export const uploadAudioRoute: FastifyPluginCallbackZod = (app) => {
	app.post(
		"/rooms/:roomId/audio",
		{
			schema: {
				params: z.object({
					roomId: z.string(),
				}),
			},
		},
		async (request, reply) => {
			const { roomId } = request.params;
			const audio = await request.file();

			if (!audio) {
				throw new Error("Audio is required.");
			}

			//   acumulando em memória todo o conteúdo do arquivo.
			const audioBuffer = await audio.toBuffer();
			//   convertendo para base64
			const audioAsBase64 = audioBuffer.toString("base64");

			// 1. transcrever o aúdio usando Gemini Api
			const transcription = await transcribeAudio(
				audioAsBase64,
				audio.mimetype,
			);

			// 2. Gerar o vetor semântico / embeddings
			const embeddings = await generateEmbeddings(transcription);

			// 3. Armazenar os vetors no banco de dados (representação semântica para conseguirmos fazer as chamadas)
			const result = await db
				.insert(schema.audioChunks)
				.values({
					roomId,
					transcription,
					embeddings,
				})
				.returning();

			const chunk = result[0];

			if (!chunk) {
				throw new Error("Erro ao salvar chunk de aúdio.");
			}

			return reply.status(201).send({ chunk: chunk.id });
		},
	);
};
