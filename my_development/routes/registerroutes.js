var mysql      = require('mysql');
var dbcon     = require('./connection.js');

/*dbcon.connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nnn");
} else {
    console.log("Error connecting database ... nn");
}
});*/



exports.register = function(req,res){
    console.log("req",req.body);
    var today = new Date();
    var users={
      "emailId":req.body.email,
      "userName":req.body.userName,
      "password":req.body.password,
      "confirmPassword":req.body.confirmPassword,
      "createdOn":today
    }
    dbcon.connection.query('INSERT INTO signUp SET ?',users, function (error, results, fields) {
    if (error) {
     // console.log("error ocurred",error);
      res.send({
        "code":400,
        "failed":"error ocurred"
      })
    }else{
     // console.log('The solution is: ', results);
      res.send({
        "code":200,
        "success":"user registered sucessfully"
          });
    }
    });
  }

