// file module
var connection = require("./conDB");
module.exports = exports = {
	getGradeHotbooks:function(grade,callback){
		console.log("grade2: " + grade);
		var queryStr = "select * from hot_books left join book on hot_books.book_id = book.id where grade = "+ grade +" limit 0,6";
		connection.conn.query(queryStr,function(err,rows){
			if(err)
				console.error(err);
			else{
				console.log(JSON.stringify(rows));
				callback(rows);
			}
		})
	},
	getDetail:function(bid,callback){
		var queryStr = "select * from book where id = " + bid;
		connection.conn.query(queryStr,function(err,rows){
			if(err)
				console.error(err);
			else{
				console.log(JSON.stringify(rows[0]));
				callback(rows);
			}
		})
	},
	collectedBooks:function(uid,page,callback){
		console.log("uid: " + uid +  " page:" + page);
		var queryStr = "select book.keywords,book.img_src,book.author,book.shidu from user_book left join book on user_book.bid = book.id where user_book.uid = "+ uid +" limit " + (page-1)*8 + "," + page*8;
		connection.conn.query(queryStr,function(err,rows){
			if(err)
				console.error(err);
			else{
				console.log(JSON.stringify(rows));
				callback(rows);
			}
		})

	},
	collectBook:function(uid,bid,callback){
		var queryStr = "insert into user_book (uid,bid) values ("+uid + ","+bid+ ")"
		console.log(queryStr)
		connection.conn.query(queryStr,function(err,rows){
			if(err)
				console.error(err)
			else
				callback("1")
		})
	}
	// getDetail:function(bid){
	// 	if(bid != ""){
	// 		for(var )
	// 	}
	// }
}