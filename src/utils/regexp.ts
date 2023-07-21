/**
 * @file Utilities - regexp
 * @module tutils/utils/regexp
 */

/**
 * Escapes special characters in a string to ensure the string is a valid regex
 * pattern.
 *
 * A backslash escape (`\\`) is used when valid. A `\x2d` escape is used when
 * the former would be disallowed by stricter Unicode pattern grammar.
 *
 * @todo examples
 *
 * @param {string} pattern - Regex pattern to escape
 * @return {string} `pattern` with special characters escaped
 */
const regexp = (pattern: string): string => {
  return pattern.replace(/[$()*+.?[\\\]^{|}]/g, '\\$&').replace(/-/g, '\\x2d')
}

export default regexp
