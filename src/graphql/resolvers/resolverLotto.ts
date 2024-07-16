import { Db } from "mongodb";
import { ObjectId } from "mongodb";
import { IResolvers } from "@graphql-tools/utils";
import { create } from "domain";

const resolversLotto: IResolvers = {
  Query: {
    _empty: () => "Hello world",
  },
  Mutation: {
    async createCombination(root: void, args: any, context: { db: Db }) {
      try {
        const regexp = new RegExp(args.combination, "i");
        const exist = await context.db
          .collection("lotto")
          .findOne({ name: regexp });
        if (exist) {
          return "Combination already exists";
        }
        await context.db.collection("lotto").insertOne(args.combination);
      } catch (error) {}
      return "Combination created successfully";
    },
  },
};

export default resolversLotto;
