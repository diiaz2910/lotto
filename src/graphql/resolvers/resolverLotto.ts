import { Db } from "mongodb";
import { ObjectId } from "mongodb";
import { IResolvers } from "@graphql-tools/utils";

const resolversLotto = {
  Query: {
    _empty: () => "Hello world",
  },
};

export default resolversLotto;
