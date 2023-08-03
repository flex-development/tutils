/**
 * @file Type Tests - IsUniqueSymbol
 * @module tutils/types/tests/unit-d/IsUniqueSymbol
 */

import type EmptyObject from '../empty-object'
import type Integer from '../integer'
import type TestSubject from '../is-symbol-unique'
import type { tag as opaque } from '../opaque'

describe('unit-d:types/IsUniqueSymbol', () => {
  it('should equal false if T does not extend symbol', () => {
    expectTypeOf<TestSubject<unknown>>().toEqualTypeOf<false>()
  })

  it('should equal false if T extends object', () => {
    expectTypeOf<TestSubject<symbol & { id: string }>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is any', () => {
    expectTypeOf<TestSubject<any>>().toEqualTypeOf<false>()
  })

  it('should equal false if T is never', () => {
    expectTypeOf<TestSubject<never>>().toEqualTypeOf<false>()
  })

  it('should equal false if symbol extends T', () => {
    expectTypeOf<TestSubject<symbol>>().toEqualTypeOf<false>()
  })

  it('should equal true if T is unique symbol', () => {
    expectTypeOf<TestSubject<keyof EmptyObject>>().toEqualTypeOf<true>()
    expectTypeOf<TestSubject<typeof opaque>>().toEqualTypeOf<true>()
  })

  describe('unions', () => {
    it('should distribute over unions', () => {
      expectTypeOf<TestSubject<keyof Integer>>().toEqualTypeOf<boolean>()
    })
  })
})
