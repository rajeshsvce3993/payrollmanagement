var mysql      = require('mysql');
var dbcon     = require('./connection.js');






exports.generateSalary = function(req,res)
{

pfemployeeP='';
pfemployerP='';
pfinterestP='';
esiemployeeP='';
esiemployerP='';
esiinterestP='';

annualCtc=0;
monthlyCtc=0;
basic=0;
hra=0;
pa=0;
gross=0;
netIncome=0;
pf=0;
esi=0;
pfEmployee=0;
pfEmployer=0;
esiEmployee=0;
esiEmployer=0;


hraP='';
basicP='';
paP='';




	var employeeId=req.body.employeeId;
	var amount=req.body.amount;
	var amountType=req.body.amountType;

	dbcon.connection.query("select * from master_benifits_percentage", function (err, result) {
    
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

				pfemployeeP=result[0].employeeContribution;
				pfemployerP=result[0].employerContribution;
				pfinterestP=result[0].interestContribution;
				esiemployeeP=result[1].employeeContribution;
				esiemployerP=result[1].employerContribution;
				esiinterestP=result[1].interestContribution;

				hraP=result[2].employerContribution;
				basicP=result[3].employerContribution;
				paP=result[4].employerContribution;

				if(amountType==='CTC')
				{
				annualCtc=amount;
				monthlyCtc=amount/12;
				employeePf=monthlyCtc*(pfemployeeP/100);
				employerPf=monthlyCtc*(pfemployerP/100);
				employeeEsi=monthlyCtc*(esiemployeeP/100);
				employerEsi=monthlyCtc*(esiemployerP/100);
				gross=monthlyCtc-(employerPf+employerEsi);
				netIncome=monthlyCtc -(employeePf+employerPf+employeeEsi+employerEsi);
				pf=employeePf+employerPf;
				esi=employeeEsi+employerEsi;

				hra=monthlyCtc*(hraP/100);
				basic=monthlyCtc*(basicP/100);
				pa=monthlyCtc*(paP/100);

			
				


				}
				else
				{

				annualCtc=amount;
				monthlyCtc=amount/12;
				employeePf=monthlyCtc*(pfemployeeP/100);
				employerPf=monthlyCtc*(pfemployerP/100);
				employeeEsi=monthlyCtc*(esiemployeeP/100);
				employerEsi=monthlyCtc*(esiemployerP/100);
				gross=monthlyCtc-(employerPf+employerEsi);
				netIncome=monthlyCtc -(employeePf+employerPf+employeeEsi+employerEsi);
				pf=employeePf+employerPf;
				esi=employeeEsi+employerEsi;
				hra=monthlyCtc*(hraP/100);
				basic=monthlyCtc*(basicP/100);
				pa=monthlyCtc*(paP/100);



				}
 			
			res.send({
        			"code":200,
        			
				"result" : "Success",
				"employeeId":employeeId,
				"annualCtc" : annualCtc,
				"monthlyCtc" : monthlyCtc,
				"employeePf" : employeePf,
				"employerPf" : employerPf,
				"employeeEsi" : employeeEsi,
				"employerEsi" : employerEsi,
				"gross" : gross,
				"netIncome" : netIncome,
				"pf" : pf,
				"esi" : esi,
				"hra":hra,
				"basic":basic,
				"pa":pa
				
				  
			     

	
          			});
			}

  		}		


  
      
     
    });
    
  }

