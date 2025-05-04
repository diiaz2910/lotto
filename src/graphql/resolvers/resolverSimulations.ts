import { Db, ObjectId } from "mongodb";
import { IResolvers } from "@graphql-tools/utils";

// Collections
import { SIMULATIONS_COLLECTION } from "../../mongo/collections";

const resolversSimulation: IResolvers = {
  Query: {
    async getSimulations(root: void, args: any, context: { db: Db }) {
      try {
        return await context.db
          .collection(SIMULATIONS_COLLECTION)
          .find()
          .toArray();
      } catch (error) {
        console.error(error);
        throw error; // Re-throw the error so it can be handled further up
      }
    },
  },
};

export default resolversSimulation;
