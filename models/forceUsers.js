const mongoose = require('mongoos');
const Schema = mongoose.Schema;

const forceUser =  new Schema ({
    name: {type: String, required: true},
    alignment: {type: String, required: true},
    master: {type: String, required: true}
})

module.exports =  mongoose.model('forceUser', forceUser)