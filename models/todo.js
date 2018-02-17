/**
 * Created by aless on 05/05/2017.
 */
var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', {
    text: {
        type: String,
        default: ''
    }
});