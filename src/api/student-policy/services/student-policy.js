'use strict';

/**
 * student-policy service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::student-policy.student-policy');
