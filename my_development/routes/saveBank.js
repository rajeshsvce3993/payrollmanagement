var mysql      = require('mysql');
var dbcon     = require('./connection.js');





exports.saveBank = function(req,res)

{


	var employeeId=req.body.employeeId;
   
    	var today = new Date();
    	var bankDetails=
	{
      		"employeeId":req.body.employeeId,
      		"accountName":req.body.accountName,
                "accountNumber":req.body.accountNumber,
                "ifscCode":req.body.ifscCode,
                "bankName":req.body.bankName,
                "branch":req.body.branch,
                "city":req.body.city,
		"savedOn":today
    	}
    
	dbcon.connection.query("SELECT employeeId as employeeId FROM employee_details where employeeNumber='"+employeeId+"'", function (err, result) {
    		if (err)
		{
      
      			res.send({
        			"code":400,
        			"failed":"error ocurred"
      				});
    		}
		else
		{   

			if(result.length!=0 || null)
			{
			
			res.send({
        			"code":200,
        			
				"result" : "Not Success"
	
          			});

			}
			else
			{

				dbcon.connection.query('INSERT INTO employee_bank_details SET ?',bankDetails, function (error, results, fields)
				 {
   					 if (error)
					{
									     	
      					res.send({
						"code":400,
						"failed":"error ocurred"
      						});
					}
					else
					{

 					res.send({
        					"code":200,
        			
						"result" : "Success",
				
			   			});
					}

  				});
			}
		}		


  
      
     
    });
  }

