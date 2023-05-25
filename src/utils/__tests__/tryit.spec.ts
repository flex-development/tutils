/**
 * @file Unit Tests - tryit
 * @module tutils/utils/tests/unit/tryit
 */

import INTEGER from '#fixtures/integer'
import type { Fn } from '#src/types'
import type { Mock } from '#tests/interfaces'
import testSubject from '../tryit'

describe('unit:utils/tryit', () => {
  let fn: Mock<Fn<[string?], typeof INTEGER>>

  beforeAll(() => {
    fn = vi.fn()
  })

  it('should return error-first async callback', () => {
    expect(testSubject(fn)).to.be.a('function')
  })

  describe('error-first callback', () => {
    it('should return [error, null] if fn throws', async () => {
      // Arrange
      const error: Error = new Error('not implemented')
      fn.mockRejectedValueOnce(error)

      // Act + Expect
      expect(await testSubject(fn)()).to.deep.equal([error, null])
    })

    it('should return [null, result]', async () => {
      // Arrange
      fn.mockResolvedValueOnce(INTEGER)

      // Act + Expect
      expect(await testSubject(fn)()).to.deep.equal([null, INTEGER])
    })
  })
})
