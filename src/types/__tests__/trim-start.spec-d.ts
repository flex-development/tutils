/**
 * @file Type Tests - TrimStart
 * @module tutils/types/tests/unit-d/TrimStart
 */

import type TestSubject from '../trim-start'

describe('unit-d:types/TrimStart', () => {
  it('should return T without leading whitespaces', () => {
    expectTypeOf<TestSubject<' bar '>>().toEqualTypeOf<'bar '>()
  })
})
