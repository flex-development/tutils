/**
 * @file Type Tests - IsArray
 * @module tutils/types/tests/unit-d/IsArray
 */

import type TestSubject from '../is-array'
import type Nullable from '../nullable'

describe('unit-d:types/IsArray', () => {
  it('should equal false if [T] does not extend [readonly V[]]', () => {
    expectTypeOf<TestSubject<Nullable<string[]>>>().toEqualTypeOf<false>()
    expectTypeOf<TestSubject<string[], number>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<false>()
  })

  it('should equal true if [T] extends [readonly V[]]', () => {
    expectTypeOf<TestSubject<string[]>>().toEqualTypeOf<true>()
    expectTypeOf<TestSubject<string[], string>>().toEqualTypeOf<true>()
  })
})
