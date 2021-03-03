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

Route.on('/').render('welcome')
Route.on('/users').render('users')
Route.on('/payroll').render('payroll')
Route.on('/kantor_add').render('kantor_add')
//Route.on('/divisi').render('divisi')
//Route.get('/users', 'UserController.index')
//Route.get('/payroll', 'UserController.show')
// Route.get('/divisi', () => 'Hello Adonis')
// Route.get('/kantor', () => 'Hello Adonis')

Route.get('/divisi','PostController.index')
Route.resource('/kantor','KantorController')