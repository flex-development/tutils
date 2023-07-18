/**
 * @file Test Fixtures - VEHICLE
 * @module fixtures/VEHICLE
 */

import type { Opaque } from '#src/types'
import type Vehicle from './types/vehicle'

/**
 * Vehicle tag.
 *
 * @const {symbol} VEHICLE_TAG
 */
export const VEHICLE_TAG: symbol = Symbol('vehicle')

export default {
  [VEHICLE_TAG]: 'vehicle',
  make: faker.vehicle.manufacturer(),
  model: faker.vehicle.model(),
  vin: '0WBW1G4D29TC62167',
  year: faker.date.past({ years: 3 }).getFullYear()
} as Opaque<Vehicle, 'vehicle'>
