/**
 * @file Type Tests - Trim
 * @module tutils/types/tests/unit-d/Trim
 */

import type TestSubject from '../trim'

describe('unit-d:types/Trim', () => {
  it('should remove leading and trailing whitespaces from T', () => {
    expectTypeOf<TestSubject<' foo '>>().toEqualTypeOf<'foo'>()
  })
})
