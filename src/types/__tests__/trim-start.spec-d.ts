/**
 * @file Type Tests - TrimStart
 * @module tutils/types/tests/unit-d/TrimStart
 */

import type TestSubject from '../trim-start'

describe('unit-d:types/TrimStart', () => {
  it('should remove leading whitespaces from T', () => {
    expectTypeOf<TestSubject<' foo '>>().toEqualTypeOf<'foo '>()
  })
})
