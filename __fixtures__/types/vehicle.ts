/**
 * @file Test Fixtures - Vehicle
 * @module tests/fixtures/types/Vehicle
 */

/**
 * Object representing a vehicle.
 */
type Vehicle = {
  /**
   * Vehicle manufacturer.
   */
  make: string

  /**
   * Vehicle model.
   */
  model: string

  /**
   * Vehicle identification number.
   */
  vin: string

  /**
   * Vehicle model year.
   */
  year: number
}

export type { Vehicle as default }
