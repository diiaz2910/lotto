import { Db, ObjectId } from "mongodb";
import { IResolvers } from "@graphql-tools/utils";

// collections
import { STRIKE_COLLECTION } from "../../mongo/collections";

const resolversStrike: IResolvers = {
  Query: {
    // get all combinations
    async getStrikes(
      root: void,
      args: { numbers: number[] },
      context: { db: Db }
    ) {
      try {
        return await context.db
          .collection(STRIKE_COLLECTION)
          .find({ numbers: { $all: args.numbers } })
          .toArray();
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    // get the last strike
    async getLastStrike(root: void, args: any, context: { db: Db }) {
      try {
        return await context.db
          .collection(STRIKE_COLLECTION)
          .findOne({}, { sort: { index: -1 } });
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  },
  Mutation: {
    // create a new strike
    async createStrike(root: void, args: any, context: { db: Db }) {
      try {
        // sort numbers to keep the order they were input
        const { numbers } = args.strike;

        // validations. Numbers must be between 1 and 40 and must be 4 numbers
        if (
          numbers.some((num: any) => num < 1 || num > 40) ||
          new Set(numbers).size !== 4
        ) {
          throw new Error("Invalid numbers");
        }

        // finding the highest index and incrementing it by 1
        const highestIndex = await context.db
          .collection(STRIKE_COLLECTION)
          .findOne({}, { sort: { index: -1 } });

        // incrementing the index
        const newIndex = highestIndex ? highestIndex.index + 1 : 1;

        // saving the strike to the database
        await context.db
          .collection(STRIKE_COLLECTION)
          .insertOne({ numbers, index: newIndex });
        return "Strike created successfully";
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
};

export default resolversStrike;
