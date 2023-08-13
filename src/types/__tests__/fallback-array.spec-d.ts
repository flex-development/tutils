/**
 * @file Type Tests - ArrayFallback
 * @module tutils/types/tests/unit-d/ArrayFallback
 */

import type Vehicle from '#fixtures/types/vehicle'
import type EmptyArray from '../empty-array'
import type TestSubject from '../fallback-array'
import type Nilable from '../nilable'
import type Partial from '../partial'

describe('unit-d:types/ArrayFallback', () => {
  it('should equal F if T extends NIL', () => {
    // Arrange
    type F = [Partial<Vehicle>]

    // Expect
    expectTypeOf<TestSubject<null, F>>().toEqualTypeOf<F>()
    expectTypeOf<TestSubject<undefined, F>>().toEqualTypeOf<F>()
  })

  it('should equal T if IsAny<T> extends true', () => {
    // Arrange
    type T = any

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<T>()
  })

  it('should equal T if T extends {}', () => {
    // Arrange
    type T = Vehicle

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<T>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = Nilable<readonly [Vehicle, Vehicle]>
      type Expect = EmptyArray | NonNullable<T>

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
    })
  })
})
