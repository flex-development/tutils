/**
 * @file Type Tests - Tail
 * @module tutils/types/tests/unit-d/Tail
 */

import type Digit from '../digit'
import type TestSubject from '../tail'

describe('unit-d:types/Tail', () => {
  it('should equal T.slice(1) if T extends readonly unknown[]', () => {
    expectTypeOf<TestSubject<[1, 2, 3]>>().toEqualTypeOf<[2, 3]>()
  })

  it('should equal T.slice(T.indexOf(D)) if T extends string', () => {
    expectTypeOf<TestSubject<'data.foo.bar'>>().toEqualTypeOf<'foo.bar'>()
  })

  it('should equal never if T is not an array or string', () => {
    expectTypeOf<TestSubject<Digit>>().toBeNever()
  })
})
