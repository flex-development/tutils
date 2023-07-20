/**
 * @file Utilities - noop
 * @module tutils/utils/noop
 */

import constant from './constant'

/**
 * Does nothing.
 *
 * @return {void} Nothing
 */
const noop = (): void => void constant(undefined)()

export default noop
