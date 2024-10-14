import {
  pgTable,
  serial,
  varchar,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core";

export const todos = pgTable("todos", {
  id: serial("id").primaryKey(),
  content: varchar("content", { length: 255 }).notNull(),
  completed: boolean("completed").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull(),
  password: varchar("password", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  profileId: serial("profile_id").notNull(),
});

export const profiles = pgTable("profiles", {
  id: serial("id").primaryKey(),
  username: varchar("username").notNull(),
  bio: varchar("bio", { length: 255 }),
  createdAt: timestamp("created_at").defaultNow(),
});
