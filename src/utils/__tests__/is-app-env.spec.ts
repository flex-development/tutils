/**
 * @file Unit Tests - isAppEnv
 * @module tutils/utils/tests/unit/isAppEnv
 */

import { AppEnv } from '#src/enums'
import testSubject from '../is-app-env'

describe('unit:utils/isAppEnv', () => {
  it('should return false if value is not AppEnv', () => {
    expect(testSubject(faker.string.sample())).to.be.false
  })

  it('should return true if value is AppEnv', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [
      [AppEnv.CI],
      [AppEnv.DEV],
      [AppEnv.STG],
      [AppEnv.PROD],
      [AppEnv.TEST]
    ]

    // Act + Expect
    cases.forEach(([value]) => expect(testSubject(value)).to.be.true)
  })
})
