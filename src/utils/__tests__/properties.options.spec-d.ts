/**
 * @file Type Tests - PropertiesOptions
 * @module tutils/utils/tests/unit-d/PropertiesOptions
 */

import type { Nilable } from '#src/types'
import type TestSubject from '../properties.options'

describe('unit-d:utils/PropertiesOptions', () => {
  it('should match [enu?: Nilable<boolean>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('enu')
      .toEqualTypeOf<Nilable<boolean>>()
  })
})
