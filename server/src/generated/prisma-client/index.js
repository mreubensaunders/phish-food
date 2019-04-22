"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Airdrop",
    embedded: false
  },
  {
    name: "Post",
    embedded: false
  },
  {
    name: "Sub",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/public-venombelly-424/dune-dune/dev`
});
exports.prisma = new exports.Prisma();
var models = [
  {
    name: "Airdrop",
    embedded: false
  },
  {
    name: "Post",
    embedded: false
  },
  {
    name: "Sub",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];
