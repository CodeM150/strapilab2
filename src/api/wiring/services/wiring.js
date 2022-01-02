'use strict';

/**
 * wiring service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wiring.wiring');
