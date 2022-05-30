import { ArraySchema } from './array.schema'
import { BooleanSchema } from './boolean.schema'
import { NumberSchema } from './number.schema'
import { StringSchema } from './string.schema'

/**
 * For example, a schema that looks like
 * { type: "object", properties: { name: { type: "string" } } }
 * will match { name: "Kevin" } or {} but should fail { name: 5 } and { hello: "world" }
 *
 * Required fields must be listed
 */
export type ObjectSchema = {
  type: 'object'
  properties: Record<
    string,
    StringSchema | NumberSchema | BooleanSchema | ObjectSchema | ArraySchema
  >
  required?: string[]
}
