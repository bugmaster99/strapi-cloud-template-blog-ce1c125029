module.exports = {
  routes: [
    {
      method: "GET",
      path: "/getBlogDetail",
      handler: "blog.getBlogDetail",
      config: {
        auth: false,
      },
    },
  ],
};
