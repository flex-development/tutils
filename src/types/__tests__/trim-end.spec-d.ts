/**
 * @file Type Tests - TrimEnd
 * @module tutils/types/tests/unit-d/TrimEnd
 */

import type TestSubject from '../trim-end'

describe('unit-d:types/TrimEnd', () => {
  it('should equal never if T is never', () => {
    expectTypeOf<TestSubject<never>>().toBeNever()
  })

  it('should equal string if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<string>()
  })

  it('should remove trailing whitespaces from T', () => {
    expectTypeOf<TestSubject<' foo '>>().toEqualTypeOf<' foo'>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = '0 ' | '1 ' | '2 '

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<'0' | '1' | '2'>()
    })
  })
})
