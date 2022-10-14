import { Db, MongoClient, MongoClientOptions } from "mongodb";

// eslint-disable-next-line import/no-mutable-exports
export let mongoDB: Db;

export const mongoRef: {
  db?: Db;
  connectionPromise?: Promise<{ client: MongoClient; databaseName: string }>;
} = {};

export async function mongoConnect() {
  if (mongoRef.connectionPromise) return mongoRef.connectionPromise;

  // const options: MongoClientOptions = {
  //   ca: process.env.DB_CERT,
  // };

  mongoRef.connectionPromise = MongoClient.connect(
    "mongodb://127.0.0.1:27017/"
    // options
  ).then((client) => {
    mongoRef.db = client.db("notion");
    mongoDB = mongoRef.db;
    return { client, databaseName: "notion" };
  });

  return mongoRef.connectionPromise;
}

export async function getMongo() {
  await mongoConnect();
  return mongoRef.db;
}
