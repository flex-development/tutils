/**
 * @file Type Tests - Booleanish
 * @module tutils/types/tests/unit-d/Booleanish
 */

import type TestSubject from '../booleanish'
import type Stringify from '../stringify'

describe('unit-d:types/Booleanish', () => {
  it('should extract Stringify<boolean>', () => {
    expectTypeOf<TestSubject>().extract<Stringify<boolean>>().toBeString()
  })

  it('should extract boolean', () => {
    expectTypeOf<TestSubject>().extract<boolean>().toBeBoolean()
  })
})
