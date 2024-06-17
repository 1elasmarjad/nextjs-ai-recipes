import { type Db, MongoClient } from "mongodb";
import { env } from "./env";

export async function getDB(): Promise<Db> {
  const mongoClient = new MongoClient(env.MONGO_URI);
  await mongoClient.connect();
  const db = mongoClient.db(env.MONGO_DB);
  return db;
}
