/**
 * @file Type Tests - Head
 * @module tutils/types/tests/unit-d/Head
 */

import type Digit from '../digit'
import type TestSubject from '../head'

describe('unit-d:types/Head', () => {
  it('should equal T.slice(0, T.indexOf(D)) if T extends string', () => {
    expectTypeOf<TestSubject<'foo.bar'>>().toEqualTypeOf<'foo'>()
  })

  it('should equal T.unshift() if T extends readonly unknown[]', () => {
    expectTypeOf<TestSubject<[1, 2, 3]>>().toEqualTypeOf<1>()
  })

  it('should equal never if T is not an array or string', () => {
    expectTypeOf<TestSubject<Digit>>().toBeNever()
  })
})
