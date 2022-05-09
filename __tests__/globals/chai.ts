/**
 * @file Test Globals - chai
 * @module tests/globals/chai
 * @see https://chaijs.com
 */

import { each } from '@tests/matchers'
import chai from 'chai'
import sinonChai from 'sinon-chai'

// Configure chai
chai.config.includeStack = true
chai.config.truncateThreshold = 0

/**
 * Initialize plugins.
 *
 * @see https://github.com/domenic/sinon-chai#installation-and-usage
 */
chai.use(sinonChai)

/**
 * Initialize custom matchers.
 */
chai.use(each)

// Update global namespace
global.chai = chai
global.assert = chai.assert
global.expect = chai.expect
