'use strict';

/**
 * schematic router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::schematic.schematic');
