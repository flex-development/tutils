/**
 * @file Unit Tests - isNaN
 * @module tutils/utils/tests/unit/isNaN
 */

import FLOAT from '#fixtures/float'
import INTEGER from '#fixtures/integer'
import VEHICLE from '#fixtures/vehicle'
import testSubject from '../is-nan'

describe('unit:utils/isNaN', () => {
  it('should return false if value is not Number.NaN', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [
      [FLOAT],
      [INTEGER],
      [VEHICLE.vin]
    ]

    // Act + Expect
    cases.forEach(([value]) => expect(testSubject(value)).to.be.false)
  })

  it('should return true if value is Number.NaN', () => {
    expect(testSubject(Number.NaN)).to.be.true
  })
})
