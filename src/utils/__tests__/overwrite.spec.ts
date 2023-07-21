/**
 * @file Unit Tests - overwrite
 * @module tutils/utils/tests/unit/overwrite
 */

import type Vehicle from '#fixtures/types/vehicle'
import testSubject from '../overwrite'

describe('unit:utils/overwrite', () => {
  it('should return overwrite result', () => {
    // Arrange
    const base: { vin: Vehicle['vin'] } = { vin: '' }
    const s1: { vrm: string } = { vrm: faker.vehicle.vrm() }
    const s2: { vin: Vehicle['vin'] } = { vin: faker.vehicle.vin() }

    // Act + Expect
    expect(testSubject(base, s1, s2)).to.eql(s2).but.not.equal(base)
  })
})
