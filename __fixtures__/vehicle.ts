/**
 * @file Test Fixtures - Vehicle
 * @module tests/fixtures/Vehicle
 */

/**
 * Object representing a vehicle.
 */
type Vehicle = {
  /**
   * Vehicle brand.
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
