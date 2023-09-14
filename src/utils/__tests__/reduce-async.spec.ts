/**
 * @file Unit Tests - reduceAsync
 * @module tutils/utils/tests/unit/reduceAsync
 */

import testSubject from '../reduce-async'

describe('unit:utils/reduceAsync', () => {
  it('should return accumulated value', async () => {
    expect(await testSubject([0, 1, 2], (acc, n) => acc + n, 0)).to.equal(3)
  })
})
