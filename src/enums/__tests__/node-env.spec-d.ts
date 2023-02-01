/**
 * @file Type Tests - NodeEnv
 * @module tutils/enums/tests/unit-d/NodeEnv
 */

import type TestSubject from '../node-env'

describe('unit-d:enums/NodeEnv', () => {
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

  it('should match [TEST = "test"]', () => {
    expectTypeOf<typeof TestSubject>()
      .toHaveProperty('TEST')
      .toMatchTypeOf<'test'>()
  })
})
