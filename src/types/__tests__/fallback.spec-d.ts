/**
 * @file Type Tests - Fallback
 * @module tutils/types/tests/unit-d/Fallback
 */

import type TestSubject from '../fallback'
import type Optional from '../optional'

describe('unit-d:types/Fallback', () => {
  it('should equal Exclude<T, Condition> | F if T extends Condition', () => {
    // Arrange
    type Condition = undefined
    type Expected = Exclude<T, Condition> | F
    type F = null
    type T = Optional<string>

    // Expect
    expectTypeOf<TestSubject<T, F, Condition>>().toEqualTypeOf<Expected>()
  })

  it('should equal T if T does not extend Condition', () => {
    expectTypeOf<TestSubject<string, string>>().toBeString()
  })
})
