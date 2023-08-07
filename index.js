const express = require("express");
const dotenv = require("dotenv");
const { ApolloServer } = require("@apollo/server");
const { ApolloServerPluginDrainHttpServer } = require("@apollo/server/plugin/drainHttpServer");
const bodyParser = require("body-parser");
const { expressMiddleware } = require("@apollo/server/express4");
const http = require("http");
const cors = require("cors");
const fakeData = require("./fakeData");
const router = require("./src/routes");

dotenv.config();

const app = express();

// const httpServer = http.createServer(app);

// const typeDefs = `#graphql
//  type Folder {
//   id: String,
//   name: String,
//   createdAt: String,
//   author: Author,
//   authorId: String,

//  }
//  type Author {
//   name: String,
//   id: String,
//  }
//  type Query {
//   folders: [Folder]
//  }
// `;
// const resolvers = {
//   Query: {
//     folders: () => {
//       return fakeData.folders;
//     },
//   },
//   Folder: {
//     author: (parent, args) => {
//       const authorId = parent.authorId;
//       return fakeData.author.id === authorId ? fakeData.author : null;
//     },
//   },
// };

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
// });

// (async function startServer() {
//   await server.start();
//   app.use(expressMiddleware(server));
// })();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
router(app);
const port = process.env.PORT;
app.listen(port || 4000, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`listening on ${port}`);
});
