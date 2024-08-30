import { GraphQLSchema } from "graphql";
import { mergeSchemas } from "@graphql-tools/schema";
import "graphql-import-node";

//TypeDefs
import bonusTypeDefs from "./schemas/bonus.graphql";
import lottoTypeDefs from "./schemas/lotto.graphql";
import powerBallTypeDefs from "./schemas/powerBall.graphql";
import strikeTypeDefs from "./schemas/strike.graphql";
import chartTypDefs from "./schemas/chart.graphql";
import simulationTypeDefs from "./schemas/simulations.graphql";

//Resolvers
import resolversBonus from "./resolvers/resolversBonus";
import resolversLotto from "./resolvers/resolverLotto";
import resolversPowerBall from "./resolvers/resolverPowerBall";
import resolversStrike from "./resolvers/resolverStrike";
import resolversChart from "./resolvers/resolverChart";
import resolversSimulation from "./resolvers/resolverSimulations";

const schema: GraphQLSchema = mergeSchemas({
  typeDefs: [
    bonusTypeDefs,
    lottoTypeDefs,
    powerBallTypeDefs,
    strikeTypeDefs,
    chartTypDefs,
    simulationTypeDefs,
  ],
  resolvers: [
    resolversBonus,
    resolversLotto,
    resolversPowerBall,
    resolversStrike,
    resolversChart,
    resolversSimulation,
  ],
});

export default schema;
