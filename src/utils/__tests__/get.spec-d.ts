/**
 * @file Type Tests - get
 * @module tutils/utils/tests/unit-d/get
 */

import type Person from '#fixtures/interfaces/person'
import type { EmptyString, Get } from '#src/types'
import type testSubject from '../get'

describe('unit-d:utils/get', () => {
  it('should return Get<T, K, F>', () => {
    // Arrange
    type T = Person
    type K = 'friends.0.name.middle'
    type F = EmptyString
    type Expect = Get<T, K, F>

    // Expect
    expectTypeOf<typeof testSubject<T, K, F>>().returns.toEqualTypeOf<Expect>()
  })
})
