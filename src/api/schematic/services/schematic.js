'use strict';

/**
 * schematic service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::schematic.schematic');
