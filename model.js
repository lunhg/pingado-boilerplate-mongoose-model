let mongoose = require('mongoose')

let Schema = require('./schema');
let ModelSchema = mongoose.Schema(schema)
let Model = mongoose.Model('Model', ModelSchema)

module.exports = mongoose.model('Model')
