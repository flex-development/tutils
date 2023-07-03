/**
 * @file Type Tests - ArrayToUnion
 * @module tutils/types/tests/unit-d/ArrayToUnion
 */

import type TestSubject from '../array-to-union'
import type NIL from '../nil'
import type Nilable from '../nilable'

describe('unit-d:types/ArrayToUnion', () => {
  it('should equal never if T is any', () => {
    expectTypeOf<TestSubject<any>>().toBeNever()
  })

  it('should equal never if T is never', () => {
    expectTypeOf<TestSubject<never>>().toBeNever()
  })

  describe('T extends NIL', () => {
    it('should equal never', () => {
      expectTypeOf<TestSubject<NIL>>().toBeNever()
      expectTypeOf<TestSubject<null>>().toBeNever()
      expectTypeOf<TestSubject<undefined>>().toBeNever()
    })
  })

  describe('T extends readonly unknown[]', () => {
    it('should equal T[number]', () => {
      // Arrange
      type T = ['a', 'b', 'c']

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<'a' | 'b' | 'c'>()
    })
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<Nilable<[0, 1, 2]>>>().toEqualTypeOf<0 | 1 | 2>()
    })
  })
})
