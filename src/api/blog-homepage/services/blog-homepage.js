'use strict';

/**
 * blog-homepage service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blog-homepage.blog-homepage');
