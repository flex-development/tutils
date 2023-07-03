/**
 * @file Type Tests - JsonifiableObject
 * @module tutils/types/tests/unit-d/JsonifiableObject
 */

import type Jsonifiable from '../jsonifiable'
import type TestSubject from '../jsonifiable-object'
import type Optional from '../optional'

describe('unit-d:types/JsonifiableObject', () => {
  describe('keys', () => {
    it('should equal string', () => {
      expectTypeOf<keyof TestSubject>().toBeString()
    })
  })

  describe('properties', () => {
    it('should equal JsonValue', () => {
      expectTypeOf<TestSubject[keyof TestSubject]>().toEqualTypeOf<
        Optional<Jsonifiable>
      >()
    })
  })
})
