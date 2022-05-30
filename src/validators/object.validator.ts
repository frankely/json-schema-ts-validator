import { validateArray } from './array.validator'
import { validateBoolean } from './boolean.validator'
import { validateNumber } from './number.validator'
import { validateString } from './string.validator'

export function validateObject(value: string, schema: ObjectSchema): boolean {
  const parsedValue = JSON.parse(value)
  const requiredProperties = schema.required || []
  const entries = Object.entries(schema.properties)

  if (requiredProperties.length > 0) {
    const missingProperties = requiredProperties.filter(
      requiredProperty => !(requiredProperty in parsedValue)
    )

    if (missingProperties.length > 0) {
      return false
    }
  }

  for (let i = 0; i < entries.length; i++) {
    const [name, schema] = entries[i]

    switch (schema.type) {
      case 'string': {
        if (!validateString(parsedValue[name], schema)) {
          return false
        }
        break
      }
      case 'number': {
        if (!validateNumber(parsedValue[name], schema)) {
          return false
        }
        break
      }
      case 'boolean': {
        if (!validateBoolean(parsedValue[name], schema)) {
          return false
        }
        break
      }
      case 'object': {
        if (!validateObject(JSON.stringify(parsedValue[name]), schema)) {
          return false
        }
        break
      }
      case 'array': {
        if (!validateArray(JSON.stringify(parsedValue[name]), schema)) {
          return false
        }
        break
      }
      default: {
        return false
      }
    }
  }

  return true
}
