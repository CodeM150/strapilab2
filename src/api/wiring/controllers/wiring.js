'use strict';

/**
 *  wiring controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::wiring.wiring');
