/**
 * @file Type Tests - EmptyString
 * @module tutils/types/tests/unit-d/EmptyString
 */

import type TestSubject from '../empty-string'

describe('unit-d:types/EmptyString', () => {
  it('should equal type of ""', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<''>()
  })
})
