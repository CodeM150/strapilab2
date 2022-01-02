'use strict';

/**
 * wiring router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::wiring.wiring');
