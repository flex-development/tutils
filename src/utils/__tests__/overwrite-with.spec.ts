/**
 * @file Unit Tests - overwriteWith
 * @module tutils/utils/tests/unit/overwriteWith
 */

import type Vehicle from '#fixtures/types/vehicle'
import isUndefined from '../is-undefined'
import type { OverwriteCustomizer } from '../overwrite-with'
import testSubject from '../overwrite-with'

describe('unit:utils/overwriteWith', () => {
  let customizer: OverwriteCustomizer

  beforeAll(() => {
    customizer = (outgoing: any, incoming: any): any => {
      return isUndefined(incoming) ? outgoing : incoming
    }
  })

  it('should return overwrite result', () => {
    // Arrange
    const base: { vin: Vehicle['vin'] } = { vin: '' }
    const s1: { vrm: string } = { vrm: faker.vehicle.vrm() }
    const s2: { vin: Vehicle['vin'] } = { vin: faker.vehicle.vin() }

    // Act + Expect
    expect(testSubject(customizer, base, s1, s2, { vin: undefined }))
      .to.eql(s2)
      .but.not.equal(base)
  })
})
