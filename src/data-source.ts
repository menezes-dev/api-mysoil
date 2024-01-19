import "dotenv/config";
import "reflect-metadata";
import { connect, ConnectOptions } from "mongoose";

interface MongoDBConnectionOptions extends ConnectOptions {}

const connectToDatabase = async (): Promise<void> => {
  const mongoDBUrl: string | undefined = process.env.MONGODB_URI;

  if (!mongoDBUrl) {
    throw new Error('Missing env var: "MONGODB_URI"');
  }

  const options: MongoDBConnectionOptions = {};

  try {
    await connect(mongoDBUrl, options);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

export default connectToDatabase;
