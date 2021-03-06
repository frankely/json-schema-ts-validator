import { StringSchema } from '../schemas/string.schema'

export function validateString(value: string, schema: StringSchema): boolean {
  if (schema.enum) {
    return schema.enum.includes(value)
  }
  return true
}
