/**
 * @file Type Tests - OmitIndexSignature
 * @module tutils/types/tests/unit-d/OmitIndexSignature
 */

import type Dot from '../dot'
import type TestSubject from '../omit-index-signature'

describe('unit-d:types/OmitIndexSignature', () => {
  it('should remove index signatures from T', () => {
    // Arrange
    type T = {
      [x: number]: any
      [x: string]: any
      [x: symbol]: any
      [x: `${bigint}`]: string
      [x: `${number}`]: string
      [x: `data${Dot}${string}`]: string
      hello: 'world'
      foo?: 'bar'
    }

    // Expect
    expectTypeOf<TestSubject<T>>().toEqualTypeOf<{
      hello: 'world'
      foo?: 'bar'
    }>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      // Arrange
      type T = { [x: number]: number; a: 0 } | { [x: string]: number; z?: 25 }
      type Expect = { a: 0 } | { z?: 25 }

      // Expect
      expectTypeOf<TestSubject<T>>().toEqualTypeOf<Expect>()
    })
  })
})
