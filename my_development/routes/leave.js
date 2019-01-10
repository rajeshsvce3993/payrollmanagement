var mysql      = require('mysql');
var dbcon     = require('./connection.js');





exports.leave = function(req,res)
{

	//var employeeId=req.body.employeeId;

	dbcon.connection.query("select * from master_leaves", function (err, result) {
    
	if (err)
		{
      
      		res.send({
        		"code":400,
        		"failed":"error ocurred"
      			});
    		}
		else
		{   

			if(result.length==0 || null)
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

