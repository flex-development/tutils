/**
 * @file Unit Tests - assignWith
 * @module tutils/utils/tests/unit/assignWith
 */

import VEHICLE from '#fixtures/vehicle'
import type { AssignCustomizer } from '../assign-with'
import testSubject from '../assign-with'
import isUndefined from '../is-undefined'

describe('unit:utils/assignWith', () => {
  let customizer: AssignCustomizer

  beforeAll(() => {
    customizer = (outgoing: any, incoming: any): any => {
      return isUndefined(outgoing) ? incoming : outgoing
    }
  })

  it('should return assignment result', () => {
    // Arrange
    const s1: { vin: string } = { vin: 'vin' }
    const s2: { vrm: string } = { vrm: faker.vehicle.vrm() }

    // Act + Expect
    expect(testSubject(customizer, VEHICLE, s1, s2))
      .to.eql({ ...VEHICLE, ...s2 })
      .but.not.equal(VEHICLE)
  })
})
