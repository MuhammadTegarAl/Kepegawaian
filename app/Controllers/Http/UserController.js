'use strict'

const KantorController = require('./KantorController')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const User =use('App/Models/User')
const Kantor = use('App/Models/Kantor')
const Divisi = use('App/Models/Divisi')
const Golongan = use('App/Models/Golongan')
// const { validate } = use('Validator')
/**
 * Resourceful controller for interacting with users
 */
class UserController {
  /**
   * Show a list of all users.
   * GET users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const model = await User.query()
      .with('divisi')
      .with('kantor')
      .with('golongan')
      .fetch()
    return view.render('user',{users:model.toJSON()})
  }

  /**
   * Render a form to be used for creating a new user.
   * GET users/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    const model = await Kantor.all()
    const model2 = await Divisi.all()
    const model3 = await Golongan.all()
    return view.render('add.user_add',{
      kantors:model.toJSON(),
      divisis:model2.toJSON(),
      golongans:model3.toJSON()
    })
  }

  /**
   * Create/save a new user.
   * POST users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, session }) {
    // const rules = {
    //   username: 'required',
    //   email: 'required|email|unique:users,email',
    //   password: 'required|confirmed'
    // }

    // const validation = await validate(request.all(), rules)
    // console.log(validation)
    // if (validation.fails()) {
    //   session
    //     .withErrors({error:validation.messages()})
    //     .flashExcept(['password'])

    //   return response.redirect('back')
    // }
    const user = new User()
    user.username = request.input('username')
    user.password = request.input('password')
    user.email = request.input('email')
    user.divisi_id = request.input('divisi_id')
    user.golongan_id = request.input('golongan_id')
    user.kantor_id = request.input('kantor_id')
    await user.save()
    return response.redirect('/user')
  }
  

  /**
   * Display a single user.
   * GET users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const model = await User.find(params.id)
    // const model2 = await Kantor.find(params.id)
    // const model3 = await Divisi.find(params.id)
    // const model4 = await Golongan.find(params.id)
    console.log(model)
    return view.render('detail.user_detail', {
      users:model,
      // kantors:model2,
      // divisis:model3,
      // golongans:model4,
    })
  } 

  /**
   * Render a form to update an existing user.
   * GET users/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update user details.
   * PUT or PATCH users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a user with id.
   * DELETE users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = UserController
