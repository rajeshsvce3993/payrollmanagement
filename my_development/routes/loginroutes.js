var jwt = require('jsonwebtoken');
var mysql      = require('mysql');
var dbcon     = require('./connection.js');

/*dbcon.connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nnn");
} else {
    console.log("Error connecting database ... nn");
}
});*/





  exports.login = function(req,res){
    var email= req.body.userName;
    var password = req.body.password;

var token = jwt.sign({'email':email,'password' : password},'authtoken');

    dbcon.connection.query('SELECT * FROM signUp WHERE emailId = ?',[email], function (error, results, fields) {
    if (error) {
      // console.log("error ocurred",error);
      res.send({
        "code":400,
        "failed":"error ocurred"
      })
    }else{
      // console.log('The solution is: ', results);
      if(results.length >0){
        if(results[0].password == password){
          res.send({
            "code":200,
            "success":"login sucessfull",
	    "token":token
              });
        }
        else{
          res.send({
            "code":204,
            "success":"Email and password does not match"
              });
        }
      }
      else{
        res.send({
          "code":204,
          "success":"Email does not exits"
            });
      }
    }
    });
  }
