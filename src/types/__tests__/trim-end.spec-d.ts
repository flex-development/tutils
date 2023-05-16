/**
 * @file Type Tests - TrimEnd
 * @module tutils/types/tests/unit-d/TrimEnd
 */

import type TestSubject from '../trim-end'

describe('unit-d:types/TrimEnd', () => {
  it('should return T without trailing whitespaces', () => {
    expectTypeOf<TestSubject<' foo '>>().toEqualTypeOf<' foo'>()
  })
})
