var mysql      = require('mysql');
var dbcon     = require('./connection.js');





exports.updateEmployee = function(req,res){


    	var today = new Date();

	var employeeNumber=req.body.employeeNumber;    

        var firstName=req.body.firstName;
        var lastName=req.body.lastName;
        var designation=req.body.designation;
        var dateOfBirth=req.body.dob;
        var emailId =req.body.email;
        var mobileNumber=req.body.mobile;
        var permanentNo=req.body.permanentNo;
        var permanentName=req.body.permanentName;
        var permanentStreet=req.body.permanentStreet;
        var permanentNationality=req.body.permanentNationality;
        var permanentState=req.body.permanentState;
        var permanentCity=req.body.permanentCity;
        var permanentPin = req.body.permanentPin;
        var currentNo =req.body.currentNo;
        var currentName=req.body.currentName;
        var currentStreet =req.body.currentStreet;
        var currentNationality=req.body.currentNationality;
        var currentState=req.body.currentState;
        var currentCity=req.body.currentCity;
        var currentPin=req.body.currentPin;      
        var createdOn =today;
      
    
    

var sql = "UPDATE employee_details SET firstName='"+firstName+"',lastName='"+lastName+"',designation='"+designation+"',dateOfBirth='"+dateOfBirth+"',emailId='"+emailId+"',mobileNumber='"+mobileNumber+"',permanentNo='"+permanentNo+"',permanentName='"+permanentName+"',permanentStreet='"+permanentStreet+"',permanentNationality='"+permanentNationality+"',permanentState='"+permanentState+"',permanentCity='"+permanentCity+"',permanentPin='"+permanentPin+"',currentNo='"+currentNo+"',currentName='"+currentName+"',currentStreet='"+currentStreet+"',currentNationality='"+currentNationality+"',currentState='"+currentState+"',currentCity='"+currentCity+"',currentPin='"+currentPin+"' WHERE employeeNumber='"+employeeNumber+"'";
  
dbcon.connection.query(sql);


      
 res.send({
        "code":200,
        "output":"Success"
      	});
    		

  
  }

