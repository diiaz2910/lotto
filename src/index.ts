import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import cors from "cors";
import schema from "./graphql";
import MongoLib from "./mongo";

const app = express();

app.use(
  cors({
    origin: "*", // Allows all urls
    methods: ["GET", "POST"],
    credentials: true,
  })
);

const server = new ApolloServer({
  schema,
  introspection: true,
});

server.start().then(() => {
  app.use(
    "/api",
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

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/api`);
  });
});
