/**
 * For example, a schema that looks like
 * { type: "object", properties: { name: { type: "string" } } }
 * will match { name: "Kevin" } or {} but should fail { name: 5 } and { hello: "world" }
 *
 * Required fields must be listed
 */
type ObjectSchema = {
  type: 'object'
  properties: Record<
    string,
    StringSchema | NumberSchema | BooleanSchema | ObjectSchema | ArraySchema
  >
  required?: string[]
}
