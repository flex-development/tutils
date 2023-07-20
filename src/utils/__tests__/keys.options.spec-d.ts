/**
 * @file Type Tests - KeysOptions
 * @module tutils/utils/tests/unit-d/KeysOptions
 */

import type { Nilable } from '#src/types'
import type AlphabetizeOptions from '../alphabetize.options'
import type TestSubject from '../keys.options'

describe('unit-d:utils/KeysOptions', () => {
  it('should extend AlphabetizeOptions', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<AlphabetizeOptions>()
  })

  it('should match [deep?: Nilable<boolean>]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('deep')
      .toEqualTypeOf<Nilable<boolean>>()
  })
})
