/**
 * @file Unit Tests - ifelse
 * @module tutils/utils/tests/unit/ifelse
 */

import VEHICLE from '#fixtures/vehicle'
import type { Booleanish } from '#src/types'
import testSubject from '../ifelse'

describe('unit:utils/ifelse', () => {
  let falsy: Booleanish
  let truthy: Booleanish

  beforeAll(() => {
    falsy = 0
    truthy = 1
  })

  it('should return falsy if condition is falsy', () => {
    expect(testSubject(null, truthy, falsy)).to.equal(falsy)
  })

  it('should return truthy if condition is truthy', () => {
    expect(testSubject(VEHICLE, truthy, falsy)).to.equal(truthy)
  })
})
