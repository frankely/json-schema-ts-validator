import { BooleanSchema } from './boolean.schema'
import { NumberSchema } from './number.schema'
import { ObjectSchema } from './object.schema'
import { StringSchema } from './string.schema'

/**
 * A schema that looks like this:
 * { type: "array", items: { type: object, properties: { a: { type: number } } } }
 * will match: [{a: 5},  {a: 2}, {a: 10}] but won't match [{a: 5}, {a: 'hello'}]
 */
export type ArraySchema = {
  type: 'array'
  items:
    | StringSchema
    | NumberSchema
    | BooleanSchema
    | ObjectSchema
    | ArraySchema
}
