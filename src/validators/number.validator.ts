export function validateNumber(value: string, schema: NumberSchema): boolean {
  return schema.type === 'number' && !Number.isNaN(Number(value))
}
