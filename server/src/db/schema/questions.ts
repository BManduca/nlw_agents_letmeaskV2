import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { rooms } from "./rooms.ts";

export const questions = pgTable("question", {
	// id random generate
	id: uuid().primaryKey().defaultRandom(),
	// foreign key
	roomId: uuid()
		.references(() => rooms.id)
		.notNull(),
	question: text().notNull(),
	answer: text(),
	createdAt: timestamp().defaultNow().notNull(),
});
