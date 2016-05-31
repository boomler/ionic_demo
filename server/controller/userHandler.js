var user = require("../model/user");
var bodyParser = require('body-parser');
var cookieParser = require("cookie-parser");
module.exports = exports = {
    register: function(req, res) {
        var u = {
            name: req.body.name,
            password: req.body.password,
            mail: req.body.email
        }
        console.log(u);
        user.register(u, res.end);
    },
    login: function(req, res) {
        var u = {
            name: req.body.name,
            password: req.body.password
        }
        user.checkLogin(u, res.end);
    },
    friendList: function(req, res) {
        user.friendList(req.session.id, res.end)
    }
}
