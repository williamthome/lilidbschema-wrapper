import {
  MapDbWrapper,
  privateString,
  requiredNumber,
  requiredSchema,
  requiredString,
  ISchemaParser,
  InsertOneInDbSchema,
  schemaCollectionFactory,
  GetAllFromDb,
} from '@williamthome/lilidbschema-wrapper'

const baseSchema = requiredSchema({
  id: privateString(),
})
const fooSchema = requiredSchema({
  foo: requiredString(),
  ...baseSchema.wrapping,
})
const barSchema = requiredSchema({
  bar: requiredNumber(),
  ...baseSchema.wrapping,
})

type BaseSchema = typeof baseSchema
type FooSchema = typeof fooSchema
type BarSchema = typeof barSchema

const baseParser = <TSchema extends BaseSchema>(): ISchemaParser<TSchema> => ({
  parse: async (dto) =>
    ({
      id: (Math.random() * 999).toString(),
      ...dto,
    } as any),
})

const collections = [
  schemaCollectionFactory.create('fooCollection', fooSchema),
  schemaCollectionFactory.create('barCollection', barSchema),
]

type Collections = typeof collections

const insertOneInDb = new InsertOneInDbSchema<Collections>()
const getAllFromDb = new GetAllFromDb<Collections>()
const db = new MapDbWrapper<Collections>()

async function run() {
  await insertOneInDb.insertOne(
    'fooCollection',
    fooSchema,
    db,
    baseParser<FooSchema>(),
    {
      foo: 'test',
    },
  )

  await insertOneInDb.insertOne(
    'barCollection',
    barSchema,
    db,
    baseParser<BarSchema>(),
    {
      bar: 123,
    },
  )

  const foos = await getAllFromDb.getAll('fooCollection', db)
  const bars = await getAllFromDb.getAll('barCollection', db)

  console.log({ foos, bars })
}

run()
