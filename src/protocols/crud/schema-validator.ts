import type { IValidator } from '@williamthome/lilidb-wrapper'
import type { IDoValidation, ValidateError } from '@williamthome/lilischema'

export interface ISchemaValidator {
  validateSchema: <T, Validator extends IDoValidation<T>>(
    validator: Validator,
  ) => IValidator<ValidateError>
}
