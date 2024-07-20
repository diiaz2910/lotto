import { Db, ObjectId } from "mongodb";
import { IResolvers } from "@graphql-tools/utils";

//collections
import { POWERBALL_COLLECTION } from "../../mongo/collections";

const resolversPowerBall: IResolvers = {
  Query: {
    async getPowerBalls(root: void, args: any, context: { db: Db }) {
      try {
        return await context.db
          .collection(POWERBALL_COLLECTION)
          .find()
          .toArray();
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  },
  Mutation: {
    async createPowerBall(root: void, args: any, context: { db: Db }) {
      try {
        const sortedNumbers = [...args.powerBall.numbers].sort((a, b) => a - b);
        await context.db
          .collection(POWERBALL_COLLECTION)
          .insertOne({ numbers: sortedNumbers });
        return "PowerBall created successfully";
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  },
};

export default resolversPowerBall;
