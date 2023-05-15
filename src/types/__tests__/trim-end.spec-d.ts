/**
 * @file Type Tests - TrimEnd
 * @module tutils/types/tests/unit-d/TrimEnd
 */

import type TestSubject from '../trim-end'

describe('unit-d:types/TrimEnd', () => {
  it('should remove trailing whitespaces from T', () => {
    expectTypeOf<TestSubject<' foo '>>().toEqualTypeOf<' foo'>()
  })
})
