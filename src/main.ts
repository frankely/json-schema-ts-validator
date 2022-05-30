import { ArraySchema } from './schemas/array.schema'
import { validateArray } from './validators/array.validator'

function runBasicSchemaValidatorDemo() {
  const schema: ArraySchema = {
    type: 'array',
    items: {
      type: 'array',
      items: {
        type: 'object',
        required: ['lastName'],
        properties: { name: { type: 'string' } },
      },
    },
  }
  const invalidInput = `[[{ "name": "hello" }],[]]`
  const validInput = `[[{ "lastName": "hello" }],[]]`

  console.log(
    `This is an array validator, it is testing that the following is an array of arrays of objects with the required property lastName included in the inner most schema`
  )

  console.log(`Provided Schema: ${JSON.stringify(schema)}`)
  console.log(`(Invalid) Input Value: ${JSON.stringify(invalidInput)}`)
  console.log(`Result: ${validateArray(invalidInput, schema)}`) // It is false because the required property lastName was not provided

  console.log(`(Valid) Input Value: ${JSON.stringify(validInput)}`)
  console.log(`Result: ${validateArray(validInput, schema)}`) // It is false because the required property lastName was not provided
}

runBasicSchemaValidatorDemo()
