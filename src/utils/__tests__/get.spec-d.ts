/**
 * @file Type Tests - get
 * @module tutils/utils/tests/unit-d/get
 */

import type Person from '#fixtures/person.interface'
import type { EmptyString, Get } from '#src/types'
import type testSubject from '../get'

describe('unit-d:utils/get', () => {
  it('should return Get<T, P, F>', () => {
    // Arrange
    type T = Person
    type P = 'friends.0.name.middle'
    type F = EmptyString

    // Expect
    expectTypeOf<typeof testSubject<T, P, F>>().returns.toEqualTypeOf<
      Get<T, P, F>
    >()
  })
})
