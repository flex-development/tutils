/**
 * @file Type Tests - Fallback
 * @module tutils/types/tests/unit-d/Fallback
 */

import type TestSubject from '../fallback'
import type NIL from '../nil'
import type Nilable from '../nilable'

describe('unit-d:types/Fallback', () => {
  type C = NIL

  it('should equal Exclude<T, C> | F if T extends C', () => {
    // Arrange
    type T = Nilable<string>
    type F = number

    // Expect
    expectTypeOf<TestSubject<T, F, C>>().toEqualTypeOf<Exclude<T, C> | F>()
  })

  it('should equal T if T does not extend C', () => {
    // Arrange
    type T = string
    type F = null

    // Expect
    expectTypeOf<TestSubject<T, F, C>>().toEqualTypeOf<T>()
  })
})
