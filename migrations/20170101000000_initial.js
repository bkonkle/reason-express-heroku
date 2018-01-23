exports.up = function (knex, Promise) {
  return (
    // Kick off a promise chain
    Promise.resolve()

      .then(() => knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";'))

      // PaperClip
      .then(() =>
        knex.schema.createTable('paper_clips', function (table) {
          // entity data
          table
            .uuid('id')
            .primary()
            .notNullable()
            .unique()
            .defaultTo(knex.raw('uuid_generate_v4()'))
          table.timestamps(true, true)

          // fields
          table.string('size').notNullable()
        })
      )
  )
}

exports.down = function (knex, Promise) {
  throw new Error('Downward migrations are not supported. Restore from backup.')
}
