var mysql      = require('mysql');
var dbcon     = require('./connection.js');





exports.updateBenifit = function(req,res)
{




var employeePf=req.body.employeePf;
var employerPf=req.body.employerPf;
var interestPf=req.body.interestPf;
var employeeEsi=req.body.employeeEsi;
var employerEsi=req.body.employerEsi;
var interestEsi=req.body.interestEsi;
var hra=req.body.hra;
var basic=req.body.basic;
var pa=req.body.pa;

console.log(hra);
var records = [
    	['EPF', employeePf, employerPf,interestPf],
    	['ESI',employeeEsi,employerEsi,interestEsi],
	['HRA','0',hra,'0'],
	['BASIC','0',basic,'0'],
	['PROJECT ALLOWANCE','0',pa,'0']
    
  ];

dbcon.connection.query("truncate master_benifits_percentage", function (error, result, fields) {
});

  dbcon.connection.query("INSERT INTO master_benifits_percentage (benifitName,employeeContribution,employerContribution,interestContribution) VALUES ?", [records], function (error, result, fields) {

    if (error)
	{

res.send({
			"code":400,
			"failed":"error ocurred",
});
}
else
{
res.send({
				"code":200,
				"success":"Employee created sucessfully",
				
				  });

}

   
    
  

});


    		
  }

