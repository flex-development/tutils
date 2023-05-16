/**
 * @file Type Tests - Join
 * @module tutils/types/tests/unit-d/Join
 */

import type Author from '#fixtures/author.interface'
import type TestSubject from '../join'

describe('unit-d:types/Join', () => {
  it('should equal A.join(Delimiter)', () => {
    // Arrange
    type A = []
    type A1 = [1, 2, 3]
    type A2 = [1n, 2n, 3n]
    type A3 = [false, true, false]
    type A4 = ['arr', ...number[]]
    type A5 = [...A4, keyof Author]

    // Expect
    expectTypeOf<TestSubject<A>>().toEqualTypeOf<''>()
    expectTypeOf<TestSubject<A1>>().toEqualTypeOf<'1.2.3'>()
    expectTypeOf<TestSubject<A2>>().toEqualTypeOf<'1.2.3'>()
    expectTypeOf<TestSubject<A3>>().toEqualTypeOf<'false.true.false'>()
    expectTypeOf<TestSubject<A4>>().toEqualTypeOf<`arr.${string}`>()
    expectTypeOf<TestSubject<A5>>().toEqualTypeOf<
      | `arr.${string}.email`
      | `arr.${string}.first_name`
      | `arr.${string}.last_name`
    >()
  })
})
