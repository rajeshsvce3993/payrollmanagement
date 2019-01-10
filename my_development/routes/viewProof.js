var mysql      = require('mysql');
var dbcon     = require('./connection.js');



var fs = require("fs");

//global.photos='';
//global.aadhaars=undefined;
//global.pans=undefined;*/
exports.viewProof = function(req,res)
{

var photo='';
var aadhaar='';
var pan='';
//photos='';
var aadhaars='';
var pans='';

	var employeeId=req.body.employeeId;

	dbcon.connection.query("select employeeId from employee_details where employeeNumber='"+employeeId+"'", function (err, result) {
    
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
        			"code":201,
        			
				"result" : "Not Success"
	
          			});

			}
			else
			{
 			dbcon.connection.query("select photo,aadhaar,pan from employee_proof where employeeId='"+employeeId+"'", function (err, result) {
    
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
        			"code":202,
        			
				"result" : "Not Success"
	
          			});

			}
			else
			{
 			 

			
			file1=result[0].photo;
			file2=result[0].aadhaar;
			file3=result[0].pan;
			//console.log(file1);
			var readerPhoto = fs.createReadStream('./employeeProofs/'+file1+'.txt');
			var readerAadhaar = fs.createReadStream('./employeeProofs/'+file1+'.txt');
			var readerPan = fs.createReadStream('./employeeProofs/'+file1+'.txt');
			
			readerPhoto.setEncoding('UTF8');
			readerAadhaar.setEncoding('UTF8');
			readerPan.setEncoding('UTF8');  
			 // console.log(readerPan.setEncoding('UTF8'));
				readerPhoto.on('data', function(chunk) {  
				   photo+= chunk;  
				});  
				readerPhoto.on('end',function(){  


exports.a = 'true';				  // console.log(photo); 
exports.photos = photo;
//res.send(photo);
//var m = require('./mod');				
//global.photos=photo;
//exports.photos = photo;
//var m = require('./viewProof');
//photos=photo;
 				//console.log(photo);
			//return photos;
				});  

				readerPhoto.on('error', function(err){  
				   //console.log(err.stack);  
				});  


				readerAadhaar.on('data', function(chunk) {  
				   aadhaar += chunk; 
				//console.log(aadhaar); 

				});  
				readerAadhaar.on('end',function(){  
				   //console.log(aadhaar); 
				exports.aadhaars = aadhaar; 
				});  
				readerAadhaar.on('error', function(err){  
				   //console.log(err.stack);  
				}); 

 
				readerPan.on('data', function(chunk) {  
				   pan += chunk;  
				});  
				readerPan.on('end',function(){  
				   //console.log(data); 
				exports.pans=pan; 
				});  
				readerPan.on('error', function(err){  
				   //console.log(err.stack);  
				});  

//var photos = require.company;
//var photos = require('./viewProof').photos
//console.log(global.photos);
//console.log(photos);		
var photos = require('./viewProof').photos;
var aadhaars = require('./viewProof').aadhaars;
var pans = require('./viewProof').pans;
var a = require('./viewProof').a;
if(a=='true')
{
//console.log(photos);
}
	if (1!=1)
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
					
								"photo" : photos,
								"aadhaar" : aadhaars,
								"pan" : pans
	
					  			});

							}

			}

  		}		


  
      
     
    });
    
			
			

			}

  		}		


  
      
     
    });
    
  }

