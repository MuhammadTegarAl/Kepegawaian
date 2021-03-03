'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class KantorSchema extends Schema {
  up () {
    this.create('kantors', (table) => {
      table.increments() 
      table.timestamps()
      table.string('nama_kantor',20)
      table.text('alamat_kantor',100)
      table.string('nama_ketua',80)
      table.string('kontak_kantor',20)
    })
  }

  down () {
    this.drop('kantors')
  }
}

module.exports = KantorSchema
