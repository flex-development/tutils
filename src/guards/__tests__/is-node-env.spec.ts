/**
 * @file Unit Tests - isNodeEnv
 * @module tutils/guards/tests/unit/isNodeEnv
 */

import { NodeEnv } from '#src/enums'
import testSubject from '../is-node-env'

describe('unit:guards/isNodeEnv', () => {
  it('should return false if value is not NodeEnv', () => {
    expect(testSubject(faker.string.sample())).to.be.false
  })

  it('should return true if value is NodeEnv', () => {
    // Arrange
    const cases: Parameters<typeof testSubject>[] = [
      [NodeEnv.DEV],
      [NodeEnv.PROD],
      [NodeEnv.TEST]
    ]

    // Act + Expect
    cases.forEach(([value]) => expect(testSubject(value)).to.be.true)
  })
})
