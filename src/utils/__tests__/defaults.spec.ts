/**
 * @file Unit Tests - defaults
 * @module tutils/utils/tests/unit/defaults
 */

import type Vehicle from '#fixtures/types/vehicle'
import type { Partial } from '#src/types'
import testSubject from '../defaults'

describe('unit:utils/defaults', () => {
  let base: Partial<Vehicle> & { vrm: string }

  beforeAll(() => {
    base = { vrm: faker.vehicle.vrm() }
  })

  it('should return merge result', () => {
    // Arrange
    const s1: { vrm: number } = { vrm: faker.number.int() }
    const s2: { vin: string } = { vin: faker.vehicle.vin() }

    // Act + Expect
    expect(testSubject(base, s1, s2))
      .to.eql({ ...base, ...s2 })
      .but.not.equal(base)
  })
})
