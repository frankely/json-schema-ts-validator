import { BooleanSchema } from '../schemas/boolean.schema'

export function validateBoolean(value: string, schema: BooleanSchema): boolean {
  return (
    schema.type === 'boolean' && ['true', 'false'].includes(value.toLowerCase())
  )
}
