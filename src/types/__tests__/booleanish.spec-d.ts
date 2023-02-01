/**
 * @file Type Tests - Booleanish
 * @module tutils/types/tests/unit-d/Booleanish
 */

import type TestSubject from '../booleanish'

describe('unit-d:types/Booleanish', () => {
  it('should extract boolean', () => {
    expectTypeOf<TestSubject>().extract<boolean>().toBeBoolean()
  })

  it('should extract "false"', () => {
    expectTypeOf<TestSubject>().extract<'false'>().toEqualTypeOf<'false'>()
  })

  it('should extract "true"', () => {
    expectTypeOf<TestSubject>().extract<'true'>().toEqualTypeOf<'true'>()
  })
})
