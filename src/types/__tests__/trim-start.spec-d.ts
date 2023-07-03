/**
 * @file Type Tests - TrimStart
 * @module tutils/types/tests/unit-d/TrimStart
 */

import type TestSubject from '../trim-start'

describe('unit-d:types/TrimStart', () => {
  it('should equal never if T is never', () => {
    expectTypeOf<TestSubject<never>>().toBeNever()
  })

  it('should equal string if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<string>()
  })

  it('should removing leading whitespaces from T', () => {
    expectTypeOf<TestSubject<' bar '>>().toEqualTypeOf<'bar '>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = ' 0' | ' 1' | ' 2'

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<'0' | '1' | '2'>()
    })
  })
})
