"use strict";

/**
 *  blogger controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::blogger.blogger", ({ strapi }) => ({
  async find(ctx) {
    ctx.query = {
      ...ctx.query,
      populate: ["img"],
    };
    const { data, meta } = await super.find(ctx);

    let bloggerCommaSepString = "";
    for (let i = 0; i < data.length; i++) {
      if (i === data.length - 1) {
        bloggerCommaSepString = bloggerCommaSepString + data[i].id;
      } else {
        bloggerCommaSepString = bloggerCommaSepString + data[i].id + ",";
      }
    }
    const bloggerBlogCountDataArr = await strapi.db.connection.context
      .raw(`SELECT blogger_id, COUNT(*) AS count
            FROM blogcms.blogs_bloggers_links
            WHERE blogger_id IN (${bloggerCommaSepString}) 
            GROUP BY blogger_id;`);

    const bloggerBlogCountData = bloggerBlogCountDataArr[0];
    const transformedData = data.map((blogger) => {
      const singleBloggerData = bloggerBlogCountData.find(
        (b) => b.blogger_id == blogger.id,
      );
      let blogsWritten = 0;
      if (singleBloggerData) {
        blogsWritten = singleBloggerData.count;
      }
      return { ...blogger, blogsWritten: +blogsWritten };
    });
    return {
      modifiedData: transformedData,
      meta,
    };
  },
}));
