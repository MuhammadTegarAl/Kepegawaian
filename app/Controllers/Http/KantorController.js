'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Kantor = use('App/Models/Kantor')
/**
 * Resourceful controller for interacting with kantors
 */
class KantorController {
  /**
   * Show a list of all kantors.
   * GET kantors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const model = await Kantor.all()
    return view.render('kantor',{kantors:model.toJSON()})
  }

  /**
   * Render a form to be used for creating a new kantor.
   * GET kantors/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    return view.render('add.kantor_add')
  }

  /**
   * Create/save a new kantor.
   * POST kantors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    console.log('request',request.all())
    const kantor = await Kantor.create(request.all())
    return response.redirect('/kantor')
  }

  /**
   * Display a single kantor.
   * GET kantors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const model = await Kantor.find(params.id)
    return view.render('detail.kantor_detail', {
      kantors:model,
    })
  }

  /**
   * Render a form to update an existing kantor.
   * GET kantors/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    
  }

  /**
   * Update kantor details.
   * PUT or PATCH kantors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a kantor with id.
   * DELETE kantors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = KantorController
