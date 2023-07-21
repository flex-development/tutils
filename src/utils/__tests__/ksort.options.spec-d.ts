/**
 * @file Type Tests - KsortOptions
 * @module tutils/utils/tests/unit-d/KsortOptions
 */

import type { Nilable } from '#src/types'
import type AlphabetizeOptions from '../alphabetize.options'
import type TestSubject from '../ksort.options'

describe('unit-d:utils/KsortOptions', () => {
  it('should extend AlphabetizeOptions', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<AlphabetizeOptions>()
  })

  it('should match [deep?: Nilable<boolean>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('deep')
      .toEqualTypeOf<Nilable<boolean>>()
  })
})
