// file module
var connection = require("./conDB");
var crypto = require('crypto');
module.exports = exports = {
    register: function(u, callback) {
        var queryRepeatUser = "select * from user where name='" + u.name + "'";
        connection.conn.query(queryRepeatUser, function(err, data) {
            if (err) {
                console.error(err);
            } else {
                if (data != "") {
                    console.log(data);
                    callback("0"); //用户名重复
                    return;
                } else {
                    u.createTime = new Date();
                    u.password = crypto.createHash('md5').update(u.password).digest('hex').toUpperCase();
                    var insertNew = "insert into user(name,mail,password,createTime) values ('" + u.name + "','" + u.mail + "','" + u.password + "','" + u.createTime + "')";
                    console.log(insertNew);
                    connection.conn.query(insertNew, function(err, data) {
                        console.log(err);
                        callback("1"); //注册成功
                    })
                }
            }
        });
    },
    loginCheck: function(u, callback) {
        var loginSql = "select * from user where name = '" + u.name + "'";
        connection.conn.query(loginSql, function(err, data) {
            if (data === "") {
                callback("0"); //未找到用户名
            } else {
                if (u.password === data[0].password) {
                    callback("1"); //注册成功
                } else {
                    callback("2"); //密码错误
                }
            }
        });

    },
    friendList: function(id, callback) {
        var friendSql = "select friendId,img_src,name from relationship left join user on user.id = relationship.friendId where userId =  " + 1;;
        connection.conn.query(friendSql, function(err, data) {
            if (err) {
                console.error(err);
            } else {
                callback(JSON.stringify(data));
            }
        });
    },
    getGrade: function(uid, callback) {
        console.log("uid:" + uid);
        var queryStr = "select grade from user where id = " + uid + " limit 1";
        connection.conn.query(queryStr, function(err, data) {
            if (err)
                console.log(err);
            else {
                // console.log("data:" + JSON.stringify(data));
                callback(data[0]["grade"]);
                // callback(2);
            }
        });
    },
     

}
