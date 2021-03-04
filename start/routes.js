'use strict'

const { route } = require('@adonisjs/framework/src/Route/Manager')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('index')


Route.on('/kantor_add').render('add.kantor_add')
Route.on('/divisi_add').render('add.divisi_add')
Route.on('/golongan_add').render('add.golongan_add')
Route.on('/user_add').render('add.user_add')

//Route.get('user/:id','UserController.show')


Route.resource('/user','UserController')
Route.resource('/divisi','DivisiController')
Route.resource('/golongan','GolonganController')
Route.resource('/kantor','KantorController')