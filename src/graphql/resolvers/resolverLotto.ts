import { Db, ObjectId } from "mongodb";
import { IResolvers } from "@graphql-tools/utils";

// Collections
import { LOTTO_COLLECTION } from "../../mongo/collections";

const resolversLotto: IResolvers = {
  Query: {
    // get all combinations
    async getCombinations(
      root: void,
      args: { numbers?: number[] },
      context: { db: Db }
    ) {
      try {
        let query = {};
        if (args.numbers) {
          query = { numbers: { $all: args.numbers } };
        }
        return await context.db
          .collection(LOTTO_COLLECTION)
          .find(query)
          .toArray();
      } catch (error) {
        console.error(error);
        throw error; // Re-throw the error so it can be handled further up
      }
    },
    // get the last combination
    async getLastCombination(root: void, args: any, context: { db: Db }) {
      try {
        return await context.db
          .collection(LOTTO_COLLECTION)
          .findOne({}, { sort: { index: -1 } });
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  },
  // create a new combination
  Mutation: {
    async createCombination(root: void, args: any, context: { db: Db }) {
      try {
        // Sort numbers before, duplication is not allowed
        const sortedNumbers = [...args.combination.numbers].sort(
          (a, b) => a - b
        );

        // Validation. Numbers must be between 1 and 40 and must be 6 numbers
        if (
          sortedNumbers.some((num) => num < 1 || num > 40) ||
          new Set(sortedNumbers).size !== 6
        ) {
          throw new Error("Invalid numbers");
        }

        const exist = await context.db
          .collection(LOTTO_COLLECTION)
          .findOne({ numbers: sortedNumbers });
        if (exist) {
          throw new Error("Combination already exists");
        }

        // finding the highest index and increment it by 1
        const highestIndex = await context.db
          .collection(LOTTO_COLLECTION)
          .findOne({}, { sort: { index: -1 } });
        const newIndex = highestIndex ? highestIndex.index + 1 : 1;

        // Saving the combination in the database with numbers sorted
        await context.db
          .collection(LOTTO_COLLECTION)
          .insertOne({ numbers: sortedNumbers, index: newIndex });
        return "Combination created successfully";
      } catch (error) {
        console.error(error);
        throw error; // Re-throw the error so it can be handled further up
      }
    },
    // update a combination
    async updateCombinations(root: void, args: any, context: { db: Db }) {
      try {
        const { _id, ...fieldsToUpdate } = args.combination;

        // validate numbers and sort them
        if (fieldsToUpdate.numbers) {
          const sortedNumbers = [...fieldsToUpdate.numbers].sort(
            (a, b) => a - b
          );

          // validation. Numbers must be between 1 and 40 and must be 6 numbers
          if (
            sortedNumbers.some((num) => num < 1 || num > 40) ||
            new Set(sortedNumbers).size !== 6
          ) {
            throw Error("Invalid numbers");
          }

          // check if combination already exists
          const exist = await context.db
            .collection(LOTTO_COLLECTION)
            .findOne({ numbers: sortedNumbers });
          if (exist) {
            throw new Error("Combination already exists");
          }

          // update numbers with sorted numbers
          fieldsToUpdate.numbers = sortedNumbers;
        }

        const exist = await context.db
          .collection(LOTTO_COLLECTION)
          .findOne({ _id: ObjectId.createFromHexString(_id) });
        if (exist) {
          await context.db
            .collection(LOTTO_COLLECTION)
            .updateOne(
              { _id: ObjectId.createFromHexString(_id) },
              { $set: fieldsToUpdate }
            );
          return "Combination updated successfully";
        } else {
          throw new Error("Combination not found");
        }
      } catch (error) {
        console.error(error);
        throw error; // re-throw the error so it can be handled further up
      }
    },
    async deleteCombination(root: void, args: any, context: { db: Db }) {
      try {
        const { _id } = args;
        const result = await context.db
          .collection(LOTTO_COLLECTION)
          .deleteOne({ _id: ObjectId.createFromHexString(_id) });
        if (result.deletedCount > 0) {
          return "Combination deleted successfully";
        } else {
          throw new Error("Combination not found");
        }
      } catch (error) {
        console.error(error);
        throw error; // re-throw the error so it can be handled further up
      }
    },
  },
};

export default resolversLotto;
