exports.up = knex => knex.schema.table('meetings', (table) => {
  table.string('presentation_url');
});

exports.down = knex => knex.schema.table('meetings', (table) => {
  table.dropColumn('presentation_url');
});
