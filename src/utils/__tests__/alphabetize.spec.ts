/**
 * @file Unit Tests - alphabetize
 * @module tutils/utils/tests/unit/alphabetize
 */

import { SortOrder } from '#src/enums'
import type { Fn } from '#src/types'
import testSubject from '../alphabetize'

describe('unit:utils/alphabetize', () => {
  type T = { letter: string }

  it('should return alphabetized copy of arr in ascending order', () => {
    // Arrange
    const arr: T[] = [{ letter: 'c' }, { letter: 'b' }, { letter: 'a' }]
    const mapper: Fn<[T], string> = ({ letter }: T): string => letter

    // Act
    const result = testSubject(arr, mapper)

    // Act + Expect
    expect(result).to.eql([{ letter: 'a' }, { letter: 'b' }, { letter: 'c' }])
    expect(result).to.not.equal(arr)
  })

  it('should return alphabetized copy of arr in descending order', () => {
    // Arrange
    const arr: T[] = [{ letter: 'a' }, { letter: 'b' }, { letter: 'c' }]
    const mapper: Fn<[T], string> = ({ letter }: T): string => letter

    // Act
    const result = testSubject(arr, mapper, { order: SortOrder.DESC })

    // Act + Expect
    expect(result).to.eql([{ letter: 'c' }, { letter: 'b' }, { letter: 'a' }])
    expect(result).to.not.equal(arr)
  })
})
