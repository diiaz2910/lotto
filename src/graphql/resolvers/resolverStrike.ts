import { Db, ObjectId } from "mongodb";
import { IResolvers } from "@graphql-tools/utils";

// collections
import { STRIKE_COLLECTION } from "../../mongo/collections";

const resolversStrike: IResolvers = {
  Query: {
    async getStrikes(root: void, args: any, context: { db: Db }) {
      try {
        return await context.db.collection(STRIKE_COLLECTION).find().toArray();
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
  Mutation: {
    async createStrike(root: void, args: any, context: { db: Db }) {
      try {
        const sortedNumbers = [...args.strike.numbers].sort((a, b) => a - b);
        await context.db
          .collection(STRIKE_COLLECTION)
          .insertOne({ numbers: sortedNumbers });
        return "Strike created successfully";
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
};

export default resolversStrike;
