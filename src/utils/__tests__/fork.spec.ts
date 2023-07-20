/**
 * @file Unit Tests - fork
 * @module tutils/utils/tests/unit/fork
 */

import testSubject from '../fork'

describe('unit:utils/fork', () => {
  let arr: number[]

  beforeAll(() => {
    arr = [0, 1, 2, 3, 4]
  })

  it('should return condition groups', () => {
    expect(testSubject(arr, (n: number) => n >= 3)).to.eql([
      [3, 4],
      [0, 1, 2]
    ])
  })
})
