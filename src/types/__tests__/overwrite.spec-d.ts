/**
 * @file Type Tests - Overwrite
 * @module tutils/types/tests/unit-d/Overwrite
 */

import type TestSubject from '../overwrite'

describe('unit-d:types/Overwrite', () => {
  type U = { name: string; uid: string }
  type D = { uid: number }

  it('should replace existing properties in U with properties in D', () => {
    // Arrange
    type Expected = { name: string; uid: number }

    // Expect
    expectTypeOf<TestSubject<U, D>>().toEqualTypeOf<Expected>()
  })
})
