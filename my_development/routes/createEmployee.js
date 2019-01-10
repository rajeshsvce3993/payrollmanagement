var mysql      = require('mysql');
var dbcon     = require('./connection.js');

/*dbcon.connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nnn");
} else {
    console.log("Error connecting database ... nn");
}
});*/



exports.createEmployee = function(req,res){

//const empId="";

    //console.log("req",req.body);
    var today = new Date();
    var employee={
      "firstName":req.body.firstName,
      "lastName":req.body.lastName,
      "designation":req.body.designation,
      "dateOfBirth":req.body.dob,
      "emailId":req.body.email,
      "mobileNumber":req.body.mobile,
      "permanentNo":req.body.permanentNo,
      "permanentName":req.body.permanentName,
      "permanentStreet":req.body.permanentStreet,
      "permanentNationality":req.body.permanentNationality,
      "permanentState":req.body.permanentState,
      "permanentCity":req.body.permanentCity,
      "permanentPin":req.body.permanentPin,
      "currentNo":req.body.currentNo,
      "currentName":req.body.currentName,
      "currentStreet":req.body.currentStreet,
      "currentNationality":req.body.currentNationality,
      "currentState":req.body.currentState,
      "currentCity":req.body.currentCity,
      "currentPin":req.body.currentPin,      
      "createdOn":today
    }
    dbcon.connection.query('INSERT INTO employee_details SET ?',employee, function (error, results, fields) {
    if (error) {
     // console.log("error ocurred",error);
      res.send({
        "code":400,
        "failed":"error ocurred"
      })
    }else{

	dbcon.connection.query("SELECT employeeId as employeeId FROM employee_details ORDER BY employeeId DESC limit 1", function (err, result) {
    if (error) throw err;

	
    var value=result[0].employeeId;

    var str1='EMP';
    var str2='00'+result[0].employeeId+"";
    
    value1 = str2.length;
    value2 = value.length;
    
     var id=str2.substr(value2,value1);
     
     empId=str1+""+id;

var sql = "UPDATE employee_details SET employeeNumber ='"+empId+"' WHERE employeeId="+value+"";
  dbcon.connection.query(sql);

 res.send({
        "code":200,
        "success":"Employee created sucessfully",
	"employeeId":""+empId+""
	//"employeeId":result.insertedId
          });

  });


  
      //console.log('The solution is: ', results);
     
    }
    });
  }

