/**
 * @file Type Tests - Nilable
 * @module tutils/types/tests/unit-d/Nilable
 */

import type NIL from '../nil'
import type TestSubject from '../nilable'

describe('unit-d:types/Nilable', () => {
  it('should extract NIL', () => {
    expectTypeOf<TestSubject<string>>().extract<NIL>().toEqualTypeOf<NIL>()
  })

  it('should extract T', () => {
    expectTypeOf<TestSubject<string>>().extract<string>().toBeString()
  })
})
