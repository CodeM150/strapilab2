'use strict';

/**
 * drive-current service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::drive-current.drive-current');
