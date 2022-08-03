/**
 * @file Type Definitions - DocumentPartial
 * @module tutils/types/DocumentPartial
 */

import type DUID from './duid.type'
import type ObjectPlain from './object-plain.type'
import type ObjectUnknown from './object-unknown.type'
import type OrPartial from './or-partial.type'
import type UID from './uid.type'

/**
 * Object that includes all object properties or a subset.
 *
 * Even when a subset of properties are requested, a partial `Document` response
 * will always include the `id` field, or the selected uid field.
 *
 * @template D - Document (collection object)
 * @template U - Name of document uid field
 */
type DocumentPartial<
  D extends ObjectPlain = ObjectUnknown,
  U extends string = DUID
> = Omit<OrPartial<D>, U> & Record<U, UID>

export { type DocumentPartial as default }
