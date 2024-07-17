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
        const regexp = new RegExp(args.combination.numbers, "i");
        const exist = await context.db
          .collection(LOTTO_COLLECTION)
          .findOne({ numbers: { $eq: args.combinations.numbers } });
        if (exist) {
          return "Combination already exists";
        }
        await context.db
          .collection(LOTTO_COLLECTION)
          .insertOne(args.combination);
      } catch (error) {}
      return "Combination created successfully";
    },
  },
};

export default resolversLotto;
