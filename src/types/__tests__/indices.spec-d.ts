/**
 * @file Type Tests - Indices
 * @module tutils/types/tests/unit-d/Indices
 */

import type EmptyArray from '../empty-array'
import type TestSubject from '../indices'
import type Numeric from '../numeric'

describe('unit-d:types/Indices', () => {
  it('should equal Numeric | number if IsTuple<T> extends false', () => {
    expectTypeOf<TestSubject<string[]>>().toEqualTypeOf<Numeric | number>()
  })

  it('should equal indices union if T if IsTuple<T> extends true', () => {
    expectTypeOf<TestSubject<['a', 'b']>>().toEqualTypeOf<'0' | '1'>()
  })

  it('should equal never if T extends EmptyArray', () => {
    expectTypeOf<TestSubject<EmptyArray>>().toBeNever()
  })

  it('should equal never if T is not an array', () => {
    expectTypeOf<TestSubject<bigint>>().toBeNever()
  })
})
