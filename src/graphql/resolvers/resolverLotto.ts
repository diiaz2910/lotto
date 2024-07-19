import { Db } from "mongodb";
import { ObjectId } from "mongodb";
import { IResolvers } from "@graphql-tools/utils";
import { create } from "domain";

// collections
import { LOTTO_COLLECTION } from "../../mongo/collections";

const resolversLotto: IResolvers = {
  Query: {
    async getCombinations(root: void, args: any, context: { db: Db }) {
      try {
        return await context.db.collection(LOTTO_COLLECTION).find().toArray();
      } catch (error) {
        console.log(error);
      }
    },
  },
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
          return "Invalid numbers";
        }

        const exist = await context.db
          .collection(LOTTO_COLLECTION)
          .findOne({ numbers: sortedNumbers });
        if (exist) {
          return "Combination already exists";
        }
        // Saving the combination in the database with numbers sorted
        await context.db
          .collection(LOTTO_COLLECTION)
          .insertOne({ numbers: sortedNumbers });
      } catch (error) {}
      return "Combination created successfully";
    },
    async updateCombinations(root: void, args: any, context: { db: Db }) {
      try {
        const { _id, ...fieldsToUpdate } = args.combination;
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
          return "Combination not found";
        }
      } catch (error) {
        console.log(error);
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
          return "Combination not found";
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};

export default resolversLotto;
