'use strict';

/**
 * all-campus service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::all-campus.all-campus');
