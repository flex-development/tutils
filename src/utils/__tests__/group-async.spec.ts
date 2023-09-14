/**
 * @file Unit Tests - groupAsync
 * @module tutils/utils/tests/unit/groupAsync
 */

import testSubject from '../group-async'

describe('unit:utils/groupAsync', () => {
  it('should return groups object', async () => {
    expect(await testSubject([3.1, 4.2, 3.3], Math.floor)).to.eql({
      3: [3.1, 3.3],
      4: [4.2]
    })
  })
})
