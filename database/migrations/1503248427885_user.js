'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.timestamps()
      table.string('username', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.integer('kantor_id')
      table.integer('divisi_id')
      table.integer('golongan_id')
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
