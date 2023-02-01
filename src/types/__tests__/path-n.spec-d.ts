/**
 * @file Type Tests - PathN
 * @module tutils/types/tests/unit-d/PathN
 */

import type TestSubject from '../path-n'

describe('unit-d:types/PathN', () => {
  it('should extract properties nested under T[K]', () => {
    // Arrange
    type T = { foo: { bar: { data: string } } }
    type K = 'foo'
    type Expected = `${K}.bar.data` | `${K}.bar`

    // Expect
    expectTypeOf<TestSubject<T, K>>().toEqualTypeOf<Expected>()
  })
})
