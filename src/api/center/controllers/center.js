"use strict";

/**
 *  center controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::center.center", ({ strapi }) => ({
  async create(ctx) {
    // some logic here
    const response = await super.create(ctx);
    // some more logic

    return response;
  },
}));
