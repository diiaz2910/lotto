import { Db } from "mongodb";
import { ObjectId } from "mongodb";
import { IResolvers } from "@graphql-tools/utils";

const resolversPowerBall = {
  Query: {
    _empty: () => "Hello world",
  },
};

export default resolversPowerBall;
