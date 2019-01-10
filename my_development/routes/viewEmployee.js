var mysql      = require('mysql');
var dbcon     = require('./connection.js');




exports.viewEmployee = function(req,res)
{

	var employeeId=req.body.employeeId;

	dbcon.connection.query("select employeeNumber, 			firstName,lastName,designation,dateOfBirth,emailId,mobileNumber,permanentNo,permanentName,permanentStreet,permanentNationality,permanentState,permanentCity,permanentPin,currentNo,currentName,currentStreet,currentNationality,currentState,currentCity,currentPin from employee_details where employeeNumber='"+employeeId+"'", function (err, result) {
    
	if (err)
		{
      
      		res.send({
        		"code":400,
        		"failed":"error ocurred"
      			});
    		}
		else
		{   

			if(result.length==0)
			{
			
			res.send({
        			"code":200,
        			
				"result" : "Not Success"
	
          			});

			}
			else
			{
 			res.send({
        			"code":200,
        			
				"result" : "Success",
				"output":result,
				  
			     

	
          			});
			}

  		}		


  
      
     
    });
    
  }

