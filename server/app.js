/*后台入口文件 所有请求通过此文件处理*/
// 此文件处理以下业务：
// 1、路由分配
// 2、cookie  session处理（登录状态 ）
// 3、此文件不处理其他业务
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');
var cookieParser = require("cookie-parser");
var session = require('express-session');
var config = require("./config");
var userhandler = require("./controller/userHandler");
var bookhandler = require("./controller/bookhandler");
app.use(bodyParser.json("{type:'application/*+json'}"));
/**静态文件服务**/
app.use("/", require('express').static(__dirname + "/public"));
app.use(cookieParser());
app.use(session({
    secret: '<mysecret>',
    saveUninitialized: true,
    resave: true,
    cookie: { maxAge: 60000 }
}));
io.on('connection', function(socket) {
    socket.on('chat message', function(msg) {
        console.log('message: ' + msg);
    });
});

http
    .listen(config.PORT, function() {
        console.log('listening on *: ' + config.PORT);
    });

app.post("/register", userhandler.register);
app.post("/login", userhandler.login);
app.get("/friendList", userhandler.friendList);

app.get("/hotBooks/:uid",bookhandler.hotBooks);
app.get("/bookDetails/:bid",bookhandler.bookDetail);
app.get("/collectedBooks/:bid/:page",bookhandler.collectedBooks);

// 个人收藏历史
app.get("/personalCollection", bookhandler.personalCollection)
