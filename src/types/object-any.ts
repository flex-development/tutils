/**
 * @file Type Definitions - ObjectAny
 * @module tutils/types/ObjectAny
 */

/**
 * Any non-null object that is **not** an array (e.g. instance objects, pojos).
 *
 * **Note**: The object **cannot** have a `length` property.
 */
type ObjectAny = { [K in string | symbol]?: any } & { length?: never }

export type { ObjectAny as default }
