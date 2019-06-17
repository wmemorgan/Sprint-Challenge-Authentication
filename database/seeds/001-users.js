const bcrypt = require('bcryptjs')

exports.seed = async function (knex) {
  await knex('users').insert([
    { id: 1, username: 'George', password: bcrypt.hashSync('pass', 12) },
    { id: 2, username: 'Steve', password: bcrypt.hashSync('pass', 12) },
    { id: 3, username: 'Harry', password: bcrypt.hashSync('abc123', 12) }
  ])
}
