var mysql      = require('mysql');
var dbcon     = require('./connection.js');
var fs = require('fs');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";





exports.uploadEmployee = function(req,res)

{

//console.log("hai");
var employeeId=req.body.employeeId;
var photo =req.body.photo;
var aadhaar=req.body.aadhaar;
var pan = req.body.pan;
var uploadOn = today;
var today = new Date();
    	


/*MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("my_project");
  var myobj = { employeeId: employeeId, photo: photo };
  dbo.collection("employeeProof").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});*/



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

			if(result.length!=0)
			{

			dbcon.connection.query("SELECT employeeId as employeeId FROM employee_proof where employeeId='"+employeeId+"'", function (error, results, fields)
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
						if(results.length==0)
							{

var file1=""+employeeId+"photo";
var file2=""+employeeId+"aadhaar";
var file3=""+employeeId+"pan";

									dbcon.connection.query("INSERT INTO employee_proof(employeeId,photo,aadhaar,pan,uploadOn) values('"+employeeId+"','"+file1+"','"+file2+"','"+file3+"','"+today+"')", function (error, results, fields) {
									    if (error) {
									     // console.log("error ocurred",error);
									      res.send({
										"code":400,
										"failed":error//"error ocurred"
									      })
									    }else{


									}
									});

/*console.log(photo);
var writerStream = fs.createWriteStream('output.txt');  
// Write the data to stream with encoding to be utf8  
writerStream.write(photo,'UTF8');  
// Mark the end of file  
writerStream.end();  */


var writerPhoto = fs.createWriteStream('./employeeProofs/'+file1+'.txt'); 
var writerAadhaar = fs.createWriteStream('./employeeProofs/'+file2+'.txt');
var writerPan = fs.createWriteStream('./employeeProofs/'+file3+'.txt'); 



writerPhoto.write(photo,'UTF8');  
writerAadhaar.write(aadhaar,'UTF8');  
writerPan.write(pan,'UTF8');  

writerPhoto.end();  
writerAadhaar.end();
writerPan.end();

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
					
										"result" : "Success",
				
							   			});
									}



						/*MongoClient.connect(url, function(err, db) {
								  if (err) throw err;
								  var dbo = db.db("my_project");
								  var myobj = { employeeId: employeeId, photo: photo,aadhaar:aadhaar,pan:pan };
								  dbo.collection("employee_proof").insertOne(myobj, function(err, result) {
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
					
										"result" : results,//"Success",
				
							   			});
									}
								    db.close();
								  });
								
								});*/

							}
						else
							{
								res.send({
										"code":201,
					
										"result" : results,//"Not Success",
				
							   			});
							}	

 					
					}

  				});
			

			}
			else
			{

				res.send({
					"code":202,
					
					"result" : "Not Success",
				
					});
			}
		}		


  
      
     
    });


 

  }

