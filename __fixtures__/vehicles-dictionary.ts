/**
 * @file Test Fixtures - VEHICLES_DICTIONARY
 * @module fixtures/VEHICLES_DICTIONARY
 */

import type Vehicle from './types/vehicle'

export default {
  0: {
    make: faker.vehicle.manufacturer(),
    model: faker.vehicle.model(),
    vin: faker.vehicle.vin(),
    year: faker.date.past({ years: 3 }).getFullYear()
  },
  1: {
    make: faker.vehicle.manufacturer(),
    model: faker.vehicle.model(),
    vin: faker.vehicle.vin(),
    year: faker.date.past({ years: 5 }).getFullYear()
  }
} as { [N in 0 | 1]: Vehicle }
