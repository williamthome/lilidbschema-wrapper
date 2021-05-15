import { AnyCollection, UpdateOneInDb } from '@williamthome/lilidb-wrapper'
import type { ValidateError } from '@williamthome/lilischema'

export class UpdateOneInDbSchema<
  T extends AnyCollection[],
> extends UpdateOneInDb<ValidateError, T> {}
