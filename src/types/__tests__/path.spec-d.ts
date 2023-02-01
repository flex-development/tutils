/**
 * @file Type Tests - Path
 * @module tutils/types/tests/unit-d/Path
 */

import type TestSubject from '../path'

describe('unit-d:types/Path', () => {
  it('should extract nested and top-level properties of T', () => {
    // Arrange
    type T = { foo: { bar: { data: string } } }
    type Expected = 'foo.bar.data' | 'foo.bar' | 'foo'

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expected>()
  })
})
