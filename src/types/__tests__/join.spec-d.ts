/**
 * @file Type Tests - Join
 * @module tutils/types/tests/unit-d/Join
 */

import type Author from '#fixtures/author.interface'
import type EmptyArray from '../empty-array'
import type TestSubject from '../join'

describe('unit-d:types/Join', () => {
  it('should equal A.join(Delimiter)', () => {
    // Arrange
    type A1 = EmptyArray
    type A2 = [1, 2, 3]
    type A3 = [1n, 2n, 3n]
    type A4 = [false, true, false]
    type A5 = ['arr', ...number[]]
    type A6 = [...A5, keyof Author]

    // Expect
    expectTypeOf<TestSubject<A1>>().toEqualTypeOf<''>()
    expectTypeOf<TestSubject<A2>>().toEqualTypeOf<'1.2.3'>()
    expectTypeOf<TestSubject<A3>>().toEqualTypeOf<'1.2.3'>()
    expectTypeOf<TestSubject<A4>>().toEqualTypeOf<'false.true.false'>()
    expectTypeOf<TestSubject<A5>>().toEqualTypeOf<`arr.${string}`>()
    expectTypeOf<TestSubject<A6>>().toEqualTypeOf<
      | `arr.${string}.display_name`
      | `arr.${string}.email`
      | `arr.${string}.first_name`
      | `arr.${string}.last_name`
    >()
  })
})
