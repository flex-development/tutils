/**
 * @file Unit Tests - merge
 * @module tutils/utils/tests/unit/merge
 */

import type Vehicle from '#fixtures/types/vehicle'
import testSubject from '../merge'

describe('unit:utils/merge', () => {
  let base: { vehicle: { vin: Vehicle['vin'] } }
  let src: { id: string; vehicle: { vrm: string } }

  beforeAll(() => {
    base = { vehicle: { vin: faker.vehicle.vin() } }
    src = { id: faker.string.nanoid(), vehicle: { vrm: faker.vehicle.vrm() } }
  })

  it('should return merge result', () => {
    expect(testSubject(base, src))
      .to.eql({ ...src, vehicle: { ...base.vehicle, ...src.vehicle } })
      .but.not.equal(base)
  })
})
