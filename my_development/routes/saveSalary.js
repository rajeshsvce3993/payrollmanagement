var mysql      = require('mysql');
var dbcon     = require('./connection.js');





exports.saveSalary = function(req,res)

{


	var employeeId=req.body.employeeId;
   
    	var today = new Date();
    	var salaryDetails=
	{
      				"employeeId":req.body.employeeId,
      				"annualCtc" : req.body.annualCtc,
				"monthlyCtc" : req.body.monthlyCtc,
				"employeePf" : req.body.employeePf,
				"employerPf" : req.body.employerPf,
				"employeeEsi" : req.body.employeeEsi,
				"employerEsi" : req.body.employerEsi,
				"gross" : req.body.gross,
				"netIncome" : req.body.netIncome,
				"pf" : req.body.pf,
				"esi" : req.body.esi,
				"hra":req.body.hra,
				"basic":req.body.basic,
				"pa":req.body.pa,
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

			/*if(result.length!=0 || null)
			{
			
			res.send({
        			"code":200,
        			
				"result" : "Not Success"
	
          			});

			}
			else
			{*/

				dbcon.connection.query('INSERT INTO employee_salary_details SET ?',salaryDetails, function (error, results, fields)
				 {
   					 if (error)
					{
									     	
      					res.send({
						"code":400,
						"result":error//"error ocurred"
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


  
      
     
    });
  }

