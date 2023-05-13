/**
 * @file Type Definitions - ObjectPlain
 * @module tutils/types/ObjectPlain
 */

/**
 * Type representing a plain old JavaScript object (POJO).
 *
 * @see https://masteringjs.io/tutorials/fundamentals/pojo
 */
type ObjectPlain = { [K in string | symbol]?: unknown }

export type { ObjectPlain as default }
