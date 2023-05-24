/**
 * @file Type Tests - Merge
 * @module tutils/types/tests/unit-d/Merge
 */

import type Author from '#fixtures/author.interface'
import type TestSubject from '../merge'
import type Simplify from '../simplify'

describe('unit-d:types/Merge', () => {
  it('should equal Simplify<Omit<T, keyof U> & U>', () => {
    // Arrange
    type T = Author
    type U = { display_name: string }
    type Expected = Simplify<Omit<T, keyof U> & U>

    // Expect
    expectTypeOf<TestSubject<T, U>>().toEqualTypeOf<Expected>()
  })

  it('should equal T if U extends EmptyObject', () => {
    expectTypeOf<TestSubject<Author>>().toEqualTypeOf<Author>()
  })
})
