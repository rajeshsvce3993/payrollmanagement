var mysql      = require('mysql');
var dbcon     = require('./connection.js');
//var atob = require('atob');
var base64 = require("base-64");
var utf8 = require("utf8");




exports.readAttendence = function(req,res)

{


    var content=req.body.attendence;



    var base64str = content;

                // decode base64 string, remove space for IE compatibility
                var newstr =base64str.replace(/\s/g, '');
                var binary = Buffer.from(newstr, 'base64').toString();


                var b = new Buffer(binary, 'hex')
                var s = b.toString();

                console.log(s);
                // get binary length
                var len = binary.length;

                // create ArrayBuffer with binary length
                var buffer = new ArrayBuffer(len);

                // create 8-bit Array
                var view = new Uint8Array(buffer);
console.log(view);
                // save unicode of binary data into 8-bit Array
                for (var i = 0; i < len; i++) {
                 view[i] = binary.charCodeAt(i);
                 console.log(view[i]);
                                }
    
   /* var b64string = content;
    var byt=base64._utf8_decode(b64string);//Buffer.from(b64string, 'base64');

    //var byt = base64.decode(content);
    var text =byt;// utf8.decode(byt);
    //console.log(text);

    var tempLines = text.split("\r\n");
    if(tempLines.length <= 1 || tempLines[1] == ""){
        
        tempLines.clear;
        tempLines = text.split("\n");
        
        if(tempLines.length <= 1 || tempLines[1] == ""){
            tempLines.clear;
            tempLines = text.split("\r");
            
            if(tempLines.length <= 1 || tempLines[1] == ""){
                
                res.send({
                        "code":400,
                        "result":tempLines,//"Empty File",
                        "failed":"Invalid data content"
                    })

            }
        }
    }*/

   // var buf = atob(b64string);//Buffer.from(b64string, 'UTF-8');

//console.log(buf);
/*
var Base64 = {
 
        // private property
        _keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
     
        // public method for decoding
        decode : function (input) {
            var output = "";
            var chr1, chr2, chr3;
            var enc1, enc2, enc3, enc4;
            var i = 0;
     
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
     
            while (i < input.length) {
     
                enc1 = this._keyStr.indexOf(input.charAt(i++));
                enc2 = this._keyStr.indexOf(input.charAt(i++));
                enc3 = this._keyStr.indexOf(input.charAt(i++));
                enc4 = this._keyStr.indexOf(input.charAt(i++));
     
                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;
     
                output = output + String.fromCharCode(chr1);
     
                if (enc3 != 64) {
                    output = output + String.fromCharCode(chr2);
                }
                if (enc4 != 64) {
                    output = output + String.fromCharCode(chr3);
                }
     
            }
     
            output = Base64._utf8_decode(output);
     
            return output;
     
        },
     
        // private method for UTF-8 decoding
        _utf8_decode : function (utftext) {
            var string = "";
            var i = 0;
            var c = 0;
            var c1 = 0;
            var c2 = 0;
     
            while ( i < utftext.length ) {
     
                c = utftext.charCodeAt(i);
     
                if (c < 128) {
                    string += String.fromCharCode(c);
                    i++;
                }
                else if((c > 191) && (c < 224)) {
                    c2 = utftext.charCodeAt(i+1);
                    string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                    i += 2;
                }
                else {
                    c2 = utftext.charCodeAt(i+1);
                    c3 = utftext.charCodeAt(i+2);
                    string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                    i += 3;
                }
     
            }
     
            return string;
        }
     
    };

if(content === "" || content === "null" || content === null){ 
        
res.send({
        "code":400,
	"result":"Failure",
        "failed":"File content should not be empty"
      })
	
    }


mime=content.substr(5,8);

console.log(mime);

if(mime == "text/csv" || mime == "application/csv" || mime == "text/plain" ||
      mime == "text/comma-separated-values" || mime == "application/excel" || 
      mime == "application/vnd.ms-excel" || mime == "application/vnd.msexcel" || 
      mime == "text/anytext" || mime == "application/octet-stream" || mime == "csv" || mine == "vnd.ms-excel" || mine=="vnd.msexcel") {
   
    }else{

res.send({
        "code":400,
	"result":"Failure",
        "failed":"Unsupported file extension! You can upload .csv file alone"
      })
       
    }

decodedString = Base64.decode(content);
    if(decodedString === "" || decodedString === null){
        
res.send({
        "code":400,
	"result":"Failure",
        "failed":"Invalid data content"
      })

    }
else
{
a=1;

}
    

 var tempLines = decodedString.split("\r\n");
    if(tempLines.length <= 1 || tempLines[1] == ""){
        
        tempLines.clear;
        tempLines = decodedString.split("\n");
        
        if(tempLines.length <= 1 || tempLines[1] == ""){
            tempLines.clear;
            tempLines = decodedString.split("\r");
            
            if(tempLines.length <= 1 || tempLines[1] == ""){
                
                res.send({
                        "code":400,
                        "result":tempLines,//"Empty File",
                        "failed":"Invalid data content"
                    })

            }
        }
    }


*/

}
