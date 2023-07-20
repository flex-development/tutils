/**
 * @file Type Tests - isDataView
 * @module tutils/utils/tests/unit-d/isDataView
 */

import type testSubject from '../is-data-view'

describe('unit-d:utils/isDataView', () => {
  it('should guard DataView', () => {
    expectTypeOf<typeof testSubject>().guards.toEqualTypeOf<DataView>()
  })
})
