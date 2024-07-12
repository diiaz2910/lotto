import { MongoClient, Db } from "mongodb";
import config from "../config";

export default class MongoLib {
  private client: MongoClient;
  private dbName: any = config.dbName;
  private mongoUri: any = config.mongoUri;
  private static connection: Db;

  constructor() {
    this.client = new MongoClient(this.mongoUri);
  }

  async connect() {
    if (!MongoLib.connection) {
      await this.client.connect();
      console.log("Connected successfully to mongo");
      MongoLib.connection = this.client.db(this.dbName);
    }
    return MongoLib.connection;
  }
}
