/**
 * @file Unit Tests - listify
 * @module tutils/utils/tests/unit/listify
 */

import VEHICLES_DICTIONARY from '#fixtures/vehicles-dictionary'
import testSubject from '../listify'

describe('unit:utils/listify', () => {
  it('should return obj as array', () => {
    // Arrange
    const obj: typeof VEHICLES_DICTIONARY = VEHICLES_DICTIONARY

    // Act + Expect
    expect(testSubject(obj, ([, vehicle]) => vehicle.vin)).to.deep.equal([
      obj[0].vin,
      obj[1].vin
    ])
  })
})
