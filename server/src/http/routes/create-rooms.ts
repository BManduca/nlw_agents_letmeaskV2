import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import { z } from "zod/v4";
import { db } from "../../db/connection.ts";
import { schema } from "../../db/schema/index.ts";

export const createRoomRoute: FastifyPluginCallbackZod = (app) => {
	app.post(
		"/rooms",
		{
			schema: {
				body: z.object({
					name: z.string().min(1, { message: "O nome da sala é obrigatório." }),
					description: z.string().optional(),
				}),
			},
		},
		async (request, reply) => {
			const { name, description } = request.body;

			/*
                result -> retornado um array no SQL

                O Insert por padrào no postgres ele nào retorna os dados,
                ele uma contagem de linhas inseridas e se caso quiser retornar os
                dados, é necessário usar um returning ao final do insert e assim
                é possível ver que o result é um array com os devidos dados inseridos
            */
			const result = await db
				.insert(schema.rooms)
				.values({
					name,
					description,
				})
				.returning();

			const insertedRoom = result[0];

			if (!insertedRoom) {
				throw new Error("Failed to create new room.");
			}

			return reply.status(201).send({ roomId: insertedRoom.id });
		},
	);
};
