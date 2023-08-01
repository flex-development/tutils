/**
 * @file Unit Tests - mergeWith
 * @module tutils/utils/tests/unit/mergeWith
 */

import type Vehicle from '#fixtures/types/vehicle'
import isArray from '../is-array'
import testSubject, { type MergeCustomizer } from '../merge-with'

describe('unit:utils/mergeWith', () => {
  let base: { riders: string[]; vehicle: { vin: Vehicle['vin'] } }
  let customizer: MergeCustomizer
  let src: { id: string; riders: string[]; vehicle: { vrm: string } }

  beforeAll(() => {
    base = {
      riders: [faker.string.nanoid()],
      vehicle: { vin: faker.vehicle.vin() }
    }

    src = {
      id: faker.string.nanoid(),
      riders: [faker.string.uuid()],
      vehicle: { vrm: faker.vehicle.vrm() }
    }

    customizer = (incoming: unknown, outgoing: unknown): unknown => {
      return isArray(incoming) && isArray(outgoing)
        ? [...incoming, ...outgoing]
        : outgoing
    }
  })

  it('should return merge result', () => {
    expect(testSubject(customizer, base, src)).to.eql({
      ...src,
      riders: [...base.riders, ...src.riders],
      vehicle: { ...base.vehicle, ...src.vehicle }
    })
  })
})
