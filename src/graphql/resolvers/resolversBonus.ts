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
  },
  Mutation: {
    async createBonus(root: void, args: any, context: { db: Db }) {
      try {
        const sortedNumbers = [...args.bonus.numbers].sort((a, b) => a - b);
        await context.db
          .collection(BONUS_COLLECTION)
          .insertOne({ numbers: sortedNumbers });
        return "Bonus created successfully";
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
};

export default resolversBonus;
