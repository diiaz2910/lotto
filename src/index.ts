import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import cors from "cors";
import schema from "./graphql";
import MongoLib from "./mongo";
import config from "./config";

const app = express();
app.use(cors());

const server = new ApolloServer({
  schema,
  introspection: true,
});

server.start().then(() => {
  app.use(
    "/playground",
    cors<cors.CorsRequest>(),
    express.json(),
    expressMiddleware(server, {
      context: async ({ req, res }) => {
        const db = await new MongoLib().connect();
        const token = req.headers.token;
        return { db, token };
      },
    })
  );

  const PORT = process.env.PORT || 4500;

  app.listen(config.port, () => {
    console.log(
      `Server is running on http://localhost:${config.port}/playground`
    );
  });
});
