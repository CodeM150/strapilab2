'use strict';

/**
 * technical-graph service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::technical-graph.technical-graph');
