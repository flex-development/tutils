/**
 * @file Unit Tests - assign
 * @module tutils/utils/tests/unit/assign
 */

import VEHICLE from '#fixtures/vehicle'
import testSubject from '../assign'

describe('unit:utils/assign', () => {
  it('should return assignment result', () => {
    // Arrange
    const s1: { driver: string } = { driver: faker.string.uuid() }
    const s2: { vrm: string } = { vrm: faker.vehicle.vrm() }

    // Act + Expect
    expect(testSubject(VEHICLE, s1, s2))
      .to.eql({ ...VEHICLE, ...s1, ...s2 })
      .but.not.equal(VEHICLE)
  })
})
