import { NumberSchema } from '../schemas/number.schema'

export function validateNumber(value: string, schema: NumberSchema): boolean {
  return schema.type === 'number' && !Number.isNaN(Number(value))
}
