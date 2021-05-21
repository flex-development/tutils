/**
 * @file Test Utilities - Type Definitions
 * @module tests/types
 */

/**
 * Represents a function test case.
 *
 * @template Expected - Type of expected value
 */
export interface Testcase<Expected extends any = any> {
  expected: Expected
}
