'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PayrollSchema extends Schema {
  up () {
    this.create('payrolls', (table) => {
      table.increments()
      table.timestamps()
      table.integer('user_id')
      table.integer('total')
      table.string('bulan_ke')
    })
  }

  down () {
    this.drop('payrolls')
  }
}

module.exports = PayrollSchema
