/**
 * @file Type Tests - AppEnv
 * @module tutils/enums/tests/unit-d/AppEnv
 */

import type TestSubject from '../app-env'

describe('unit-d:enums/AppEnv', () => {
  it('should match [CI = "ci"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('CI')
      .toMatchTypeOf<'ci'>()
  })

  it('should match [DEV = "development"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('DEV')
      .toMatchTypeOf<'development'>()
  })

  it('should match [PROD = "production"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('PROD')
      .toMatchTypeOf<'production'>()
  })

  it('should match [STG = "staging"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('STG')
      .toMatchTypeOf<'staging'>()
  })

  it('should match [TEST = "test"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('TEST')
      .toMatchTypeOf<'test'>()
  })
})
