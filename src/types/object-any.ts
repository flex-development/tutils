/**
 * @file Type Definitions - ObjectAny
 * @module tutils/types/ObjectAny
 */

import type Class from './class'
import type AbstractClass from './class-abstract'

/**
 * Type representing any object that is **not** an array or function (e.g. class
 * objects, instance objects, pojos).
 *
 * **Note**: The object **cannot** have a `length` property.
 */
type ObjectAny =
  | AbstractClass<any>
  | Class<any>
  | ({ [K in string | symbol]?: any } & { length?: never })

export type { ObjectAny as default }
