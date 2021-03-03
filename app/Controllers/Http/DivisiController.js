'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Divisi = use('App/Models/Divisi')
/**
 * Resourceful controller for interacting with divisis
 */
class DivisiController {
  /**
   * Show a list of all divisis.
   * GET divisis
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const model = await Divisi.all()
    return view.render('divisi',{divisis:model.toJSON()})
  }

  /**
   * Render a form to be used for creating a new divisi.
   * GET divisis/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    return view.render('add.divisi_add')
  }

  /**
   * Create/save a new divisi.
   * POST divisis
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    console.log('request',request.all())
    const divisi = await Divisi.create(request.all())
    return response.redirect('/divisi')
  }

  /**
   * Display a single divisi.
   * GET divisis/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing divisi.
   * GET divisis/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update divisi details.
   * PUT or PATCH divisis/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a divisi with id.
   * DELETE divisis/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = DivisiController
