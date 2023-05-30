/**
 * @file Type Tests - IsUnknown
 * @module tutils/types/tests/unit-d/IsUnknown
 */

import type TestSubject from '../is-unknown'

describe('unit-d:types/IsUnknown', () => {
  it('should equal false if [unknown] does not extend [T]', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<false>()
    expectTypeOf<TestSubject<null>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<false>()
  })

  it('should equal true if [unknown] extends [T]', () => {
    expectTypeOf<TestSubject<unknown>>().toEqualTypeOf<true>()
  })
})
