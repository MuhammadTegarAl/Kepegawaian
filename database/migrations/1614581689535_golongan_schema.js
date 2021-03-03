'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GolonganSchema extends Schema {
  up () {
    this.create('golongans', (table) => {
      table.increments()
      table.timestamps()
      table.string('nama_golongan',10)
      table.integer('gaji_pokok')
      table.integer('tj_kesehatan')
      table.integer('tj_makan')
      table.integer('tj_keluarga')
      table.integer('tj_bensin')
      table.integer('tj_pendidikan')
    })
  }

  down () {
    this.drop('golongans')
  }
}

module.exports = GolonganSchema
