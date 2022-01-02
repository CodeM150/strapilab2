'use strict';

/**
 * led-type service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::led-type.led-type');
