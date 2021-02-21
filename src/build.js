/* eslint strict:"off" */
"use strict";

const fastify = require("fastify");

function build(opts) {
  const app = fastify(opts);

  app.get("/", async (request, reply) => {
    return { hello: "world" };
  });

  app.get(
    "/test",
    {
      query: {
        myname: {
          type: "number"
        }
      }
    },
    async (req, rep) => {
      const { myname } = req.query;
      return { test: myname || "no myname!" };
    }
  );

  app.get(
    "/hello",
    {
      query: {
        name: {
          type: "string"
        }
      }
    },
    async (request, reply) => {
      const { name } = request.query;
      return { hello: name || "no name!" };
    }
  );

  return app;
}

module.exports = {
  build
};
