import { GraphQLSchema } from "graphql";
import { mergeSchemas } from "@graphql-tools/schema";
import "graphql-import-node";

//TypeDefs
import bonusTypeDefs from "./schemas/bonus.graphql";
import lottoTypeDefs from "./schemas/lotto.graphql";
import powerBallTypeDefs from "./schemas/powerBall.graphql";
import strikeTypeDefs from "./schemas/strike.graphql";
import chartTypDefs from "./schemas/chart.graphql";

//Resolvers
import resolversBonus from "./resolvers/resolversBonus";
import resolversLotto from "./resolvers/resolverLotto";
import resolversPowerBall from "./resolvers/resolverPowerBall";
import resolversStrike from "./resolvers/resolverStrike";
import resolversChart from "./resolvers/resolverChart";

const schema: GraphQLSchema = mergeSchemas({
  typeDefs: [
    bonusTypeDefs,
    lottoTypeDefs,
    powerBallTypeDefs,
    strikeTypeDefs,
    chartTypDefs,
  ],
  resolvers: [
    resolversBonus,
    resolversLotto,
    resolversPowerBall,
    resolversStrike,
    resolversChart,
  ],
});

export default schema;
