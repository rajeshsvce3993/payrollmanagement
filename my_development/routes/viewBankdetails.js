var mysql      = require('mysql');
var dbcon     = require('./connection.js');




exports.viewBankdetails = function(req,res)
{

	var employeeId=req.body.employeeId;

	dbcon.connection.query("select employeeId,accountName,accountNumber,ifscCode,bankName,branch,city from employee_bank_details where employeeId='"+employeeId+"'", function (err, result) {
    
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

