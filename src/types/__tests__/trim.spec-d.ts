/**
 * @file Type Tests - Trim
 * @module tutils/types/tests/unit-d/Trim
 */

import type TestSubject from '../trim'

describe('unit-d:types/Trim', () => {
  it('should equal never if T is never', () => {
    expectTypeOf<TestSubject<never>>().toBeNever()
  })

  it('should equal string if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<string>()
  })

  it('should remove leading and trailing whitespaces from T', () => {
    expectTypeOf<TestSubject<' baz '>>().toEqualTypeOf<'baz'>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = ' 0 ' | ' 1 ' | ' 2 '

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<'0' | '1' | '2'>()
    })
  })
})
