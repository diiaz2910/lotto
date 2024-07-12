import { Db } from "mongodb";
import { ObjectId } from "mongodb";
import { IResolvers } from "@graphql-tools/utils";

const resolversBonus = {
  Query: {
    _empty: () => "Hello world",
  },
};

export default resolversBonus;
