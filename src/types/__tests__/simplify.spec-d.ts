/**
 * @file Type Tests - Simplify
 * @module tutils/types/tests/unit-d/Simplify
 */

import type { IOrderedPair, TOrderedPair } from '#fixtures/ordered-pair'
import type ObjectPlain from '../object-plain'
import type TestSubject from '../simplify'

describe('unit-d:types/Simplify', () => {
  it('should simplify complex type', () => {
    expectTypeOf<TestSubject<IOrderedPair>>().toEqualTypeOf<TOrderedPair>()
    expectTypeOf<TestSubject<IOrderedPair>>().toMatchTypeOf<ObjectPlain>()
  })
})
