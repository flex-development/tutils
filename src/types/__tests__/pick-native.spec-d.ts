/**
 * @file Type Tests - PickNative
 * @module tutils/types/tests/unit-d/PickNative
 */

import type Author from '#fixtures/author.interface'
import type TestSubject from '../pick-native'

describe('unit-d:types/PickNative', () => {
  it('should equal typescript.Pick<T, K>', () => {
    // Arrange
    type K = 'email'

    // Expect
    expectTypeOf<TestSubject<Author, K>>().toEqualTypeOf<Pick<Author, K>>
  })
})
