# Challenge

The challenge is to implement a limited-scope OpenAPI schema validator.

Write a function called `validateSchema` that takes in two arguments: `data` and `schema` and to check whether or not the `data` value matches the schema.

The possible schema types are:

```ts
/**
  * String definition
  * For example, a string schema might look like: { type: 'string' }
  * which validates any string value.
  * 
  * A schema of { type: 'string', enum: ['red', 'green', 'blue'] } only
  * validates strings that match exactly 'red', 'green' or 'blue'.
  */
type StringSchema = {
  type: 'string';
  enum?: string[];
}

type NumberSchema = {
  type: 'number'
}

type BooleanSchema = {
  type: 'boolean'
}

/**
 * For example, a schema that looks like 
 * { type: "object", properties: { name: { type: "string" } } }
 * will match { name: "Kevin" } or {} but should fail { name: 5 } and { hello: "world" }
 * 
 * Required fields must be listed
 */
type ObjectSchema = {
  type: 'object';
  properties: Record<
    string, 
    StringSchema | NumberSchema | BooleanSchema | ObjectSchema | ArraySchema
  >
  required?: string[]
}

/**
 * A schema that looks like this:
 * { type: "array", items: { type: object, properties: { a: { type: number } } } }
 * will match: [{a: 5},  {a: 2}, {a: 10}] but won't match [{a: 5}, {a: 'hello'}]
 */
type ArraySchema = {
  type: 'array';
  items: StringSchema | NumberSchema | BooleanSchema | ObjectSchema | ArraySchema
}

```

These types are defined in typescript but you can you any language you want to implement it.
