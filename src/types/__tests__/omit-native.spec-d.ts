/**
 * @file Type Tests - OmitNative
 * @module tutils/types/tests/unit-d/OmitNative
 */

import type Author from '#fixtures/author.interface'
import type TestSubject from '../omit-native'

describe('unit-d:types/OmitNative', () => {
  it('should equal typescript.Omit<T, K>', () => {
    // Arrange
    type K = 'display_name'

    // Expect
    expectTypeOf<TestSubject<Author, K>>().toEqualTypeOf<Omit<Author, K>>
  })
})
