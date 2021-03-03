'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DivisiSchema extends Schema {
  up () {
    this.create('divisis', (table) => {
      table.increments()
      table.timestamps()
      table.string('nama_divisi',20)
      table.string('nama_ketua',80)
      table.string('kontak_divisi',20)
    })
  }

  down () {
    this.drop('divisi')
  }
}

module.exports = DivisiSchema
