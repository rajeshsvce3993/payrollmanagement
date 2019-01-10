var mysql      = require('mysql');
var dbcon     = require('./connection.js');





exports.updateBankdetails = function(req,res){


    	var today = new Date();

	var employeeId=req.body.employeeId;    

        var accountName=req.body.accountName;
        var accountNumber=req.body.accountNumber;
        var ifscCode=req.body.ifscCode;
        var bankName=req.body.bankName;
        var branch =req.body.branch;
        var city=req.body.city;
              
        var savedOn =today;
      
    
    

var sql = "UPDATE employee_bank_details SET accountName='"+accountName+"',accountNumber='"+accountNumber+"',ifscCode='"+ifscCode+"',bankName='"+bankName+"',branch='"+branch+"',city='"+city+"' WHERE employeeId='"+employeeId+"'";
  
dbcon.connection.query(sql);


      
 res.send({
        "code":200,
        "output":"Success"
      	});
    		

  
  }

