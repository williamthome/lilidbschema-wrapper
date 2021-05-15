import type { ISchemaValidator } from '@/protocols/crud'
import type { IValidator } from '@williamthome/lilidb-wrapper'
import type { IDoValidation, ValidateError } from '@williamthome/lilischema'

export class SchemaValidator implements ISchemaValidator {
  validateSchema = <T, Validator extends IDoValidation<T>>(
    validator: Validator,
  ): IValidator<ValidateError> => ({
    validate: async (toValidate: unknown) =>
      await validator.validate(toValidate),
  })
}
