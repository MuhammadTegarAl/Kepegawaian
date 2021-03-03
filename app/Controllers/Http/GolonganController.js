'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Golongan = use('App/Models/Golongan')
/**
 * Resourceful controller for interacting with golongans
 */
class GolonganController {
  /**
   * Show a list of all golongans.
   * GET golongans
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const model = await Golongan.all()
    return view.render('golongan',{golongans:model.toJSON()})
  }


  /**
   * Render a form to be used for creating a new golongan.
   * GET golongans/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    return view.render('add.golongan_add')
  }

  /**
   * Create/save a new golongan.
   * POST golongans
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    console.log('request',request.all())
    const golongan = await Golongan.create(request.all())
    return response.redirect('/golongan')
  }

  /**
   * Display a single golongan.
   * GET golongans/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing golongan.
   * GET golongans/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update golongan details.
   * PUT or PATCH golongans/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a golongan with id.
   * DELETE golongans/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = GolonganController
