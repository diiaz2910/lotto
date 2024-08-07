import { Db, ObjectId } from "mongodb";
import { IResolvers } from "@graphql-tools/utils";

//collections
import { POWERBALL_COLLECTION } from "../../mongo/collections";

const resolversPowerBall: IResolvers = {
  Query: {
    // get all powerballs
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
    // get the last powerball
    async getLastPowerBall(root: void, args: any, context: { db: Db }) {
      try {
        return await context.db
          .collection(POWERBALL_COLLECTION)
          .findOne({}, { sort: { index: -1 } });
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  },
  Mutation: {
    async createPowerBall(root: void, args: any, context: { db: Db }) {
      try {
        // Sort numbers before, duplication is not allowed
        const sortedNumbers = [...args.powerBall.numbers].sort((a, b) => a - b);

        // Validation. Numbers must be between 1 and 10
        if (
          sortedNumbers.some((num) => num < 1 || num > 10) ||
          new Set(sortedNumbers).size !== 1
        ) {
          throw new Error("Invalid numbers");
        }

        // finding the highest index and incrementing it by 1
        const highestIndex = await context.db
          .collection(POWERBALL_COLLECTION)
          .findOne({}, { sort: { index: -1 } });

        // incrementing the index
        const newIndex = highestIndex ? highestIndex.index + 1 : 1;

        // saving the powerball to the database
        await context.db
          .collection(POWERBALL_COLLECTION)
          .insertOne({ numbers: sortedNumbers, index: newIndex });
        return "PowerBall created successfully";
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  },
};

export default resolversPowerBall;
