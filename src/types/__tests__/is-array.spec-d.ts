/**
 * @file Type Tests - IsArray
 * @module tutils/types/tests/unit-d/IsArray
 */

import type TestSubject from '../is-array'
import type Nilable from '../nilable'

describe('unit-d:types/IsArray', () => {
  it('should equal false if T does not extend readonly V[]', () => {
    expectTypeOf<TestSubject<unknown>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<false>()
  })

  it('should equal true if T extends readonly V[]', () => {
    expectTypeOf<TestSubject<bigint[]>>().toEqualTypeOf<true>()
    expectTypeOf<TestSubject<bigint[], bigint | number>>().toEqualTypeOf<true>()
    expectTypeOf<TestSubject<readonly ['a'], string>>().toEqualTypeOf<true>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<Nilable<string[]>>>().toEqualTypeOf<boolean>()
    })
  })
})
