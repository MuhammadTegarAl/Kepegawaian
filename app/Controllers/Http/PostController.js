'use strict'

class PostController {
    async index({view}){
        return view.render('divisi')
    }
}

module.exports = PostController
