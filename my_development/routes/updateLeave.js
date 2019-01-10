var mysql      = require('mysql');
var dbcon     = require('./connection.js');





exports.updateLeave = function(req,res)
{




var weaklyOff=req.body.weakLeave;
var casualLeave=req.body.casualLeave;
var earnLeave=req.body.earnLeave;
var sickLeave=req.body.sickLeave;

//console.log(hra);
var records = [
    	[weaklyOff, casualLeave, earnLeave,sickLeave],
    	
    
  ];

dbcon.connection.query("truncate master_leaves", function (error, result, fields) {
});

  dbcon.connection.query("INSERT INTO master_leaves (weaklyOff,casualLeave,earnLeave,sickLeave) VALUES ?", [records], function (error, result, fields) {

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

