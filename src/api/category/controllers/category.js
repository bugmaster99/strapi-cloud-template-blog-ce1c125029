"use strict";

/**
 *  category controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

//This change due to take a img in response.
module.exports = createCoreController(
  "api::category.category",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query = { ...ctx.query, populate: ["img"] };
      const { data, meta } = await super.find(ctx);

      return {
        modifiedData: data,
        meta,
      };
    },
  }),
);
