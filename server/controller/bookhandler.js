var book = require("../model/book");
var user = require("../model/user");
var bodyParser = require("body-parser");

module.exports = exports = {
    personalCollection: function(req, res) {
        var uid = req.body.id;
        book.personalCollection(uid, res.send);
    },
    hotBooks: function(req, res) {
        var uid = req.params.uid;
        console.log(uid);
        var grade = user.getGrade(uid,function(grade) {
            book.getGradeHotbooks(grade, function(bids) {
                book.getGradeHotbooks(bids, stringify);
            })
        });
        function stringify(obj) {
            res.end(JSON.stringify(obj));
        }
    },
    bookDetail:function(req,res){
    	function stringify(obj) {
            res.end(JSON.stringify(obj));
        }
    	var bookid = req.params.bid;
    	book.getDetail(bookid,stringify);
    },
    collectedBooks:function(req,res){
    	function stringify(obj) {
            res.end(JSON.stringify(obj));
        }
    	var bookid = req.params.bid;
    	var page = req.params.page;
    	book.collectedBooks(bookid,page,stringify);

    }
}
