"use strict";

/**
 *  blog controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::blog.blog", ({ strapi }) => ({
  async getBlogDetail(ctx) {
    ctx.query = {
      ...ctx.query,
      populate: [
        "bloggers",
        "categories",
        "content",
        "content.media",
        "featuredImage",
        "faq",
        "seoInformation",
      ],
    };
    const data = await strapi.documents("api::blog.blog").findMany(ctx.query);

    const getReadingTime = (content) => {
      let time = 0;
      if (content.length) {
        let data = "";
        content.forEach((contentData) => {
          if (contentData.__component === "content.content") {
            data = data + " " + contentData.text;
          }
        });

        time = Math.ceil(
          data.replace(/(<([^>]+)>)/gi, "").split(" ").length / 225,
        );
      }

      return time;
    };
    const modifiedData = data.map((blog) => {
      const dupAttrs = { ...blog, id: blog.id };
      dupAttrs.time = getReadingTime(blog?.content);
      return dupAttrs;
    });

    return { modifiedData };
  },

  async find(ctx) {
    try {
      const filters = ctx?.query?.filters;
      const sort = ctx?.query?.sort;
      const start = ctx?.query?.pagination?.page;
      const limit = ctx?.query?.pagination?.pageSize;
      const data = await strapi.documents("api::blog.blog").findMany({
        sort,
        start,
        limit,
        filters,
        populate: [
          "bloggers",
          "bloggers.seoInformation",
          "categories",
          "categories.seoInformation",
          "content",
          "content.media",
          "featuredImage",
        ],
      });

      // Function to calculate reading time

      const getReadingTime = (content) => {
        let time = 0;
        if (content.length) {
          let data = "";
          content.forEach((contentData) => {
            if (contentData.__component === "content.content") {
              data = data + " " + contentData.text;
            }
          });

          time = Math.ceil(
            data.replace(/(<([^>]+)>)/gi, "").split(" ").length / 225,
          );
        }

        return time;
      };
      const modifiedData = data.map((blog) => {
        const dupAttrs = { ...blog, id: blog.id };
        delete dupAttrs.content;
        dupAttrs.time = getReadingTime(blog?.content);
        return dupAttrs;
      });

      return { modifiedData, query: ctx.query };
    } catch (err) {
      return [];
    }
  },
}));
