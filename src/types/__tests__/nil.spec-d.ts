/**
 * @file Type Tests - NIL
 * @module tutils/types/tests/unit-d/NIL
 */

import type TestSubject from '../nil'

describe('unit-d:types/NIL', () => {
  it('should extract null', () => {
    expectTypeOf<TestSubject>().extract<null>().toBeNull()
  })

  it('should extract undefined', () => {
    expectTypeOf<TestSubject>().extract<undefined>().toBeUndefined()
  })
})
