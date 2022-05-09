/**
 * @file Test Globals - sandbox
 * @module tests/globals/sandbox
 * @see https://sinonjs.org/releases/v11.1.2/sandbox
 */

import sinon from 'sinon'

global.sandbox = sinon.createSandbox()
