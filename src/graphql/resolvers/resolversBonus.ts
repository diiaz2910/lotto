import { Db, ObjectId } from "mongodb";
import { IResolvers } from "@graphql-tools/utils";

//collections
import { BONUS_COLLECTION } from "../../mongo/collections";

const resolversBonus: IResolvers = {
  Query: {
    async getBonuses(root: void, args: any, context: { db: Db }) {
      try {
        return await context.db.collection(BONUS_COLLECTION).find().toArray();
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    // get the last bonus
    async getLastBonus(root: void, args: any, context: { db: Db }) {
      try {
        return await context.db
          .collection(BONUS_COLLECTION)
          .findOne({}, { sort: { index: -1 } });
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
  Mutation: {
    async createBonus(root: void, args: any, context: { db: Db }) {
      try {
        // Sort numbers before, duplication is not allowed
        const sortedNumbers = [...args.bonus.numbers].sort((a, b) => a - b);

        // Validation. Numbers must be between 1 and 40 and can not match any of the lotto combination
        if (
          sortedNumbers.some((num) => num < 1 || num > 40) ||
          new Set(sortedNumbers).size !== 1
        ) {
          throw new Error("Invalid number");
        }

        // finding the highest index and incrementing it by 1
        const highestIndex = await context.db
          .collection(BONUS_COLLECTION)
          .findOne({}, { sort: { index: -1 } });

        // incrementing the index
        const newIndex = highestIndex ? highestIndex.index + 1 : 1;

        // saving the bonus to the database
        await context.db
          .collection(BONUS_COLLECTION)
          .insertOne({ numbers: sortedNumbers, index: newIndex });
        return "Bonus created successfully";
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
};

export default resolversBonus;
