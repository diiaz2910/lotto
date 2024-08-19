import { IResolvers } from "@graphql-tools/utils";
import { Db } from "mongodb";

// collections
import { CHART_COLLECTION } from "../../mongo/collections";

const resolversChart: IResolvers = {
  Query: {
    async getCharts(root: void, args: void, context: { db: Db }) {
      try {
        return await context.db.collection(CHART_COLLECTION).find().toArray();
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    async getLastChart(
      root: void,
      args: { name: string },
      context: { db: Db }
    ) {
      try {
        return await context.db
          .collection(CHART_COLLECTION)
          .findOne({}, { sort: { index: -1 } });
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  },
  Mutation: {
    async addChart(
      root: void,
      args: { imageUrl: string; description: string; index: number },
      context: { db: Db }
    ) {
      try {
        const { imageUrl, description } = args;
        const result = await context.db
          .collection(CHART_COLLECTION)
          .insertOne({ imageUrl, description, index: 0 });

        const newChart = await context.db
          .collection(CHART_COLLECTION)
          .findOne({ _id: result.insertedId });
        return newChart;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  },
};

export default resolversChart;
